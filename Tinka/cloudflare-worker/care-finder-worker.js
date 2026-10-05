const allowedOrigins = new Set([
  "https://tinkahealthservices.com",
  "https://www.tinkahealthservices.com",
  "http://localhost:5173",
  "http://localhost:5175",
]);

const questionIdsByProfile = {
  adhd: ["adhd-evaluation", "adhd-setting", "adhd-age-group"],
  anxiety: ["anxiety-pattern", "anxiety-support", "anxiety-timing"],
  depression: ["depression-routine", "depression-support", "depression-timing"],
  bipolar: ["bipolar-history", "bipolar-goal", "bipolar-timing"],
  addiction: ["addiction-support", "addiction-care", "addiction-timing"],
  eating: ["eating-support", "eating-goal", "eating-timing"],
  weight: ["weight-barrier", "weight-history", "weight-timing"],
  general: ["general-routine", "general-history", "general-timing"],
};

const corsHeaders = (origin) => ({
  "Access-Control-Allow-Origin": allowedOrigins.has(origin) ? origin : "https://tinkahealthservices.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  Vary: "Origin",
  "Content-Type": "application/json; charset=utf-8",
});

const response = (body, status, origin) =>
  new Response(JSON.stringify(body), { status, headers: corsHeaders(origin) });

const readOutputText = (data) => {
  if (typeof data.output_text === "string") return data.output_text;
  return (data.output || [])
    .flatMap((item) => item.content || [])
    .filter((item) => item.type === "output_text")
    .map((item) => item.text)
    .join("");
};

const fallbackQuestionIds = (profile) =>
  (questionIdsByProfile[profile] || questionIdsByProfile.general).slice(0, 3);

const uniqueAllowedIds = (ids, profile) => {
  const allowedQuestionIds = questionIdsByProfile[profile] || questionIdsByProfile.general;
  const unique = [...new Set(ids)].filter((id) => allowedQuestionIds.includes(id));
  return unique.length >= 3 ? unique.slice(0, 3) : fallbackQuestionIds(profile);
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname !== "/api/care-finder/next") {
      return response({ error: "Not found" }, 404, origin);
    }

    if (request.method !== "POST" || !allowedOrigins.has(origin)) {
      return response({ error: "Request not allowed" }, 403, origin);
    }

    if (!env.OPENAI_API_KEY) {
      return response({ error: "Care Finder is not configured" }, 503, origin);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return response({ error: "Invalid request" }, 400, origin);
    }

    const service = typeof payload.service === "string" ? payload.service.trim().slice(0, 100) : "";
    const profile =
      typeof payload.profile === "string" && questionIdsByProfile[payload.profile]
        ? payload.profile
        : "general";
    const answers = Array.isArray(payload.answers) ? payload.answers.slice(0, 8) : [];
    const isValidAnswer = answers.every(
      (answer) =>
        answer &&
        typeof answer.id === "string" &&
        answer.id.length <= 40 &&
        typeof answer.value === "string" &&
        answer.value.length <= 60,
    );

    if (!service || !isValidAnswer) {
      return response({ error: "Invalid care finder details" }, 400, origin);
    }

    const allowedQuestionIds = questionIdsByProfile[profile];
    const schema = {
      type: "object",
      additionalProperties: false,
      required: ["followUpQuestionIds", "supportiveMessage"],
      properties: {
        followUpQuestionIds: {
          type: "array",
          items: { type: "string", enum: allowedQuestionIds },
        },
        supportiveMessage: { type: "string" },
      },
    };

    const prompt = [
      "You select three approved follow-up question IDs for a non-diagnostic mental-health care navigation form.",
      "Do not diagnose, assess risk, provide treatment advice, discuss medication, or generate new questions.",
      "Do not request or infer identity, contact details, medical history, or a clinical condition.",
      `Requested service: ${service}`,
      `Care navigation profile: ${profile}`,
      `Anonymous multiple-choice answers: ${JSON.stringify(answers)}`,
      `Allowed question IDs: ${allowedQuestionIds.join(", ")}`,
      "Return three different IDs that would help the visitor choose a next step, and a supportive message of no more than 20 words.",
    ].join("\n");

    try {
      const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          store: false,
          max_output_tokens: 160,
          input: prompt,
          text: {
            format: {
              type: "json_schema",
              name: "care_finder_follow_up",
              strict: true,
              schema,
            },
          },
        }),
      });

      if (!openAiResponse.ok) {
        return response({ followUpQuestionIds: fallbackQuestionIds(profile) }, 200, origin);
      }

      const output = await openAiResponse.json();
      const parsed = JSON.parse(readOutputText(output));
      return response(
        {
          followUpQuestionIds: uniqueAllowedIds(parsed.followUpQuestionIds || [], profile),
          supportiveMessage:
            typeof parsed.supportiveMessage === "string"
              ? parsed.supportiveMessage.slice(0, 240)
              : "",
        },
        200,
        origin,
      );
    } catch {
      return response({ followUpQuestionIds: fallbackQuestionIds(profile) }, 200, origin);
    }
  },
};
