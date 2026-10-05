import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiPhoneCall } from "react-icons/fi";
import BookingLink from "../../components/BookingLink";
import serviceData from "../services/serviceData";
import {
  CARE_FINDER_API_URL,
  CARE_FINDER_FORMSPREE_ENDPOINT,
} from "../../config/careFinder";
import { trackContactConversion } from "../../utils/googleAdsTracking";

const safetyQuestion = {
  id: "safety",
  label: "Are you safe right now?",
  helper: "This guide is not for emergencies.",
  options: [
    { value: "safe", label: "Yes, I am safe right now" },
    { value: "urgent", label: "I need urgent help now" },
  ],
};

const impactOptions = [
  { value: "a-little", label: "A little" },
  { value: "somewhat", label: "Somewhat" },
  { value: "a-lot", label: "A lot" },
];

const durationOptions = [
  { value: "recently", label: "Recently" },
  { value: "weeks", label: "A few weeks" },
  { value: "months", label: "Several months or longer" },
];

const durationLabels = {
  adhd: "How long have these ADHD-related concerns been present?",
  anxiety: "How long have these anxiety-related concerns been present?",
  depression: "How long have these mood-related concerns been present?",
  bipolar: "How long have these mood changes or concerns been present?",
  addiction: "How long has this substance-use concern been present?",
  eating: "How long has this eating-related concern been present?",
  weight: "How long has this weight-management concern been present?",
  general: "How long has this concern been present?",
};

const makeProfile = (id, concern, impact, followUps) => ({
  id,
  base: [
    concern,
    { id: "impact", label: impact, options: impactOptions },
    {
      id: "duration",
      label: durationLabels[id],
      options: durationOptions,
    },
  ],
  followUps,
});

const getServiceProfile = (serviceName) => {
  const service = serviceName || "this service";

  if (/attention deficit|adhd/i.test(service)) {
    return makeProfile(
      "adhd",
      {
        id: "concern",
        label: "Which ADHD-related concern feels most relevant?",
        options: [
          { value: "focus", label: "Focus or attention" },
          { value: "organization", label: "Organization or follow-through" },
          { value: "impulsivity", label: "Restlessness or impulsivity" },
        ],
      },
      "How much are these ADHD-related concerns affecting daily routines?",
      [
        {
          id: "adhd-evaluation",
          label: "Has there been an ADHD evaluation before?",
          options: [
            { value: "no", label: "No, not yet" },
            { value: "yes", label: "Yes, in the past" },
            { value: "unsure", label: "I am not sure" },
          ],
        },
        {
          id: "adhd-setting",
          label: "Where are these concerns showing up most?",
          options: [
            { value: "work-school", label: "Work or school" },
            { value: "home", label: "Home or daily routines" },
            { value: "relationships", label: "Relationships" },
          ],
        },
        {
          id: "adhd-age-group",
          label: "Who is seeking support?",
          options: [
            { value: "adult", label: "An adult" },
            { value: "teen", label: "A teen" },
            { value: "child", label: "A child" },
          ],
        },
      ],
    );
  }

  if (/anxiety|panic|agoraphobia|obsessive|post traumatic|stress/i.test(service)) {
    return makeProfile(
      "anxiety",
      {
        id: "concern",
        label: `Which ${service.toLowerCase()} concern feels most relevant?`,
        options: [
          { value: "worry", label: "Persistent worry or tension" },
          { value: "panic", label: "Panic, fear, or avoidance" },
          { value: "sleep", label: "Sleep or physical stress symptoms" },
        ],
      },
      `How much is ${service.toLowerCase()} affecting your day-to-day life?`,
      [
        {
          id: "anxiety-pattern",
          label: "When do these concerns tend to feel strongest?",
          options: [
            { value: "most-days", label: "Most days" },
            { value: "situations", label: "In certain situations" },
            { value: "unexpected", label: "Unexpectedly" },
          ],
        },
        {
          id: "anxiety-support",
          label: "What kind of support are you looking for now?",
          options: [
            { value: "first-conversation", label: "A first conversation" },
            { value: "ongoing", label: "Ongoing support" },
            { value: "care-review", label: "A review of care options" },
          ],
        },
        {
          id: "anxiety-timing",
          label: "When would you like to begin care?",
          options: [
            { value: "soon", label: "As soon as possible" },
            { value: "weeks", label: "Within a few weeks" },
            { value: "exploring", label: "I am still exploring" },
          ],
        },
      ],
    );
  }

  if (/depression|grief|bereavement/i.test(service)) {
    return makeProfile(
      "depression",
      {
        id: "concern",
        label: `Which part of ${service.toLowerCase()} support feels most important?`,
        options: [
          { value: "mood", label: "Low mood or loss of interest" },
          { value: "energy", label: "Energy, sleep, or motivation" },
          { value: "connection", label: "Feeling disconnected from others" },
        ],
      },
      `How much is ${service.toLowerCase()} affecting your usual routines?`,
      [
        {
          id: "depression-routine",
          label: "What part of your routine feels hardest right now?",
          options: [
            { value: "work-school", label: "Work or school" },
            { value: "home", label: "Home and daily tasks" },
            { value: "relationships", label: "Relationships" },
          ],
        },
        {
          id: "depression-support",
          label: "Have you had support for this concern before?",
          options: [
            { value: "new", label: "No, this is new for me" },
            { value: "past", label: "Yes, in the past" },
            { value: "current", label: "Yes, I have support now" },
          ],
        },
        {
          id: "depression-timing",
          label: "How soon would you like to speak with a provider?",
          options: [
            { value: "soon", label: "As soon as possible" },
            { value: "weeks", label: "Within a few weeks" },
            { value: "exploring", label: "I am still exploring" },
          ],
        },
      ],
    );
  }

  if (/bipolar/i.test(service)) {
    return makeProfile(
      "bipolar",
      {
        id: "concern",
        label: "What would you most like to discuss about bipolar disorder care?",
        options: [
          { value: "mood-changes", label: "Changes in mood or energy" },
          { value: "existing-diagnosis", label: "Support for an existing diagnosis" },
          { value: "evaluation", label: "A first evaluation" },
        ],
      },
      "How much are mood or energy changes affecting daily life?",
      [
        {
          id: "bipolar-history",
          label: "Have you previously met with a psychiatric provider?",
          options: [
            { value: "no", label: "No" },
            { value: "past", label: "Yes, in the past" },
            { value: "current", label: "Yes, currently" },
          ],
        },
        {
          id: "bipolar-goal",
          label: "What would be most helpful from a first visit?",
          options: [
            { value: "understanding", label: "Understanding care options" },
            { value: "plan", label: "Making a care plan" },
            { value: "follow-up", label: "Planning follow-up support" },
          ],
        },
        {
          id: "bipolar-timing",
          label: "When would you like to begin care?",
          options: [
            { value: "soon", label: "As soon as possible" },
            { value: "weeks", label: "Within a few weeks" },
            { value: "exploring", label: "I am still exploring" },
          ],
        },
      ],
    );
  }

  if (/addiction|substance/i.test(service)) {
    return makeProfile(
      "addiction",
      {
        id: "concern",
        label: "What type of recovery support are you looking for?",
        options: [
          { value: "starting", label: "Taking a first step" },
          { value: "ongoing", label: "Ongoing recovery support" },
          { value: "co-occurring", label: "Support alongside mental health concerns" },
        ],
      },
      "How much is this concern affecting your daily life or relationships?",
      [
        {
          id: "addiction-support",
          label: "Do you currently have recovery support?",
          options: [
            { value: "none", label: "Not at this time" },
            { value: "some", label: "Some support" },
            { value: "ongoing", label: "Ongoing support" },
          ],
        },
        {
          id: "addiction-care",
          label: "What would be most useful from a first conversation?",
          options: [
            { value: "options", label: "Understanding care options" },
            { value: "plan", label: "Planning next steps" },
            { value: "follow-up", label: "Coordinating ongoing care" },
          ],
        },
        {
          id: "addiction-timing",
          label: "When would you like to begin care?",
          options: [
            { value: "soon", label: "As soon as possible" },
            { value: "weeks", label: "Within a few weeks" },
            { value: "exploring", label: "I am still exploring" },
          ],
        },
      ],
    );
  }

  if (/eating/i.test(service)) {
    return makeProfile(
      "eating",
      {
        id: "concern",
        label: "What kind of eating-disorder support are you looking for?",
        options: [
          { value: "relationship", label: "A healthier relationship with food or body image" },
          { value: "evaluation", label: "A first evaluation" },
          { value: "ongoing", label: "Ongoing support" },
        ],
      },
      "How much is this concern affecting your routines or well-being?",
      [
        {
          id: "eating-support",
          label: "Have you worked with a provider about this before?",
          options: [
            { value: "new", label: "No, this is new for me" },
            { value: "past", label: "Yes, in the past" },
            { value: "current", label: "Yes, currently" },
          ],
        },
        {
          id: "eating-goal",
          label: "What would feel most helpful right now?",
          options: [
            { value: "options", label: "Understanding care options" },
            { value: "plan", label: "A clear next step" },
            { value: "ongoing", label: "Ongoing support" },
          ],
        },
        {
          id: "eating-timing",
          label: "When would you like to begin care?",
          options: [
            { value: "soon", label: "As soon as possible" },
            { value: "weeks", label: "Within a few weeks" },
            { value: "exploring", label: "I am still exploring" },
          ],
        },
      ],
    );
  }

  if (/weight/i.test(service)) {
    return makeProfile(
      "weight",
      {
        id: "concern",
        label: "What type of weight-management support are you looking for?",
        options: [
          { value: "goals", label: "Setting realistic health goals" },
          { value: "habits", label: "Building sustainable habits" },
          { value: "follow-up", label: "Clinical guidance and follow-up" },
        ],
      },
      "How much is this concern affecting your daily routine or well-being?",
      [
        {
          id: "weight-barrier",
          label: "Which barrier feels most difficult right now?",
          options: [
            { value: "routine", label: "Keeping a consistent routine" },
            { value: "appetite", label: "Appetite or eating patterns" },
            { value: "motivation", label: "Motivation or accountability" },
          ],
        },
        {
          id: "weight-history",
          label: "Have you had structured weight-management support before?",
          options: [
            { value: "no", label: "No" },
            { value: "past", label: "Yes, in the past" },
            { value: "current", label: "Yes, currently" },
          ],
        },
        {
          id: "weight-timing",
          label: "When would you like to begin?",
          options: [
            { value: "soon", label: "As soon as possible" },
            { value: "weeks", label: "Within a few weeks" },
            { value: "exploring", label: "I am still exploring" },
          ],
        },
      ],
    );
  }

  return makeProfile(
    "general",
    {
      id: "concern",
      label: `What would you most like help with through ${service}?`,
      options: [
        { value: "evaluation", label: "A first evaluation" },
        { value: "ongoing", label: "Ongoing support" },
        { value: "options", label: "Understanding care options" },
      ],
    },
    `How much is this ${service.toLowerCase()} concern affecting daily life?`,
    [
      {
        id: "general-routine",
        label: `Where is ${service.toLowerCase()} affecting you most?`,
        options: [
          { value: "work-school", label: "Work or school" },
          { value: "home", label: "Home or daily routines" },
          { value: "relationships", label: "Relationships" },
        ],
      },
      {
        id: "general-history",
        label: "Have you worked with a provider about this before?",
        options: [
          { value: "new", label: "No, this is new for me" },
          { value: "past", label: "Yes, in the past" },
          { value: "current", label: "Yes, currently" },
        ],
      },
      {
        id: "general-timing",
        label: "When would you like to begin care?",
        options: [
          { value: "soon", label: "As soon as possible" },
          { value: "weeks", label: "Within a few weeks" },
          { value: "exploring", label: "I am still exploring" },
        ],
      },
    ],
  );
};

const getResult = (answers) => {
  const timing = Object.entries(answers).find(([id]) => id.endsWith("-timing"))?.[1];
  const points =
    (answers.impact === "a-lot" ? 3 : answers.impact === "somewhat" ? 2 : 1) +
    (answers.duration === "months" ? 2 : answers.duration === "weeks" ? 1 : 0) +
    (timing === "soon" ? 2 : 0);
  const score = Math.max(1, Math.round((points / 7) * 10));

  let copy =
    "Taking a few minutes to name what you need is a meaningful first step. You deserve support that feels clear, respectful, and practical.";

  if (answers.impact === "a-lot" && answers.duration === "months") {
    copy =
      "You shared that this has been weighing heavily on daily life for some time. Reaching for support is a strong, practical step toward feeling more steady.";
  } else if (timing === "soon") {
    copy =
      "You said you would like support soon. That clarity matters, and taking the next step can help turn concern into a plan.";
  } else if (answers.impact === "somewhat" || answers.duration === "weeks") {
    copy =
      "You have noticed this concern affecting your routines. Exploring support now can help you feel more prepared and less alone with the next step.";
  }

  if (points >= 5) {
    return {
      score,
      title: "You have identified a reason to take the next step.",
      copy,
    };
  }

  return {
    score,
    title: "You are building clarity around the support you want.",
    copy,
  };
};

const CareFinder = () => {
  const services = useMemo(
    () => [
      ...serviceData.map((service) => service.name),
      "Not sure which service fits",
    ],
    [],
  );
  const [step, setStep] = useState("details");
  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    service: "",
    consent: false,
  });
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [isLoadingFollowUp, setIsLoadingFollowUp] = useState(false);
  const [formError, setFormError] = useState("");

  const selectedProfile = useMemo(() => getServiceProfile(lead.service), [lead.service]);
  const currentQuestion = questions[questionIndex];
  const result = getResult(answers);

  const submitLead = async (event) => {
    event.preventDefault();
    setFormError("");
    setIsSubmittingLead(true);

    try {
      const formData = new FormData();
      formData.append("fullName", lead.name);
      formData.append("email", lead.email);
      formData.append("phone", lead.phone);
      formData.append("care_finder_state", lead.state);
      formData.append("care_finder_service", lead.service);
      formData.append("Message", "Care Finder lead submitted. The visitor has started the non-diagnostic care guide.");
      formData.append("_subject", `Care Finder lead: ${lead.service}`);

      const response = await fetch(CARE_FINDER_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) throw new Error("Lead submission failed");

      trackContactConversion();
      setAnswers({});
      setQuestions([safetyQuestion, ...selectedProfile.base]);
      setQuestionIndex(0);
      setStep("questions");
    } catch {
      setFormError(
        "We could not save your contact details. Please try again or call 443-295-6600.",
      );
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const requestFollowUps = async (nextAnswers, profile) => {
    setIsLoadingFollowUp(true);
    const anonymousAnswers = Object.entries(nextAnswers)
      .filter(([id]) => id !== "safety")
      .map(([id, value]) => ({ id, value }));

    try {
      const response = await fetch(CARE_FINDER_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: lead.service,
          profile: profile.id,
          answers: anonymousAnswers,
        }),
      });
      if (!response.ok) throw new Error("Care finder unavailable");

      const data = await response.json();
      const selectedQuestions = Array.isArray(data.followUpQuestionIds)
        ? data.followUpQuestionIds
            .map((id) => profile.followUps.find((question) => question.id === id))
            .filter(Boolean)
            .slice(0, 2)
        : [];
      const followUps =
        selectedQuestions.length === 2 ? selectedQuestions : profile.followUps.slice(0, 2);
      setQuestions([safetyQuestion, ...profile.base, ...followUps]);
    } catch {
      setQuestions([safetyQuestion, ...profile.base, ...profile.followUps.slice(0, 2)]);
    } finally {
      setIsLoadingFollowUp(false);
    }
  };

  const answerQuestion = async (value) => {
    if (currentQuestion.id === "safety" && value === "urgent") {
      setAnswers({ ...answers, safety: value });
      setStep("crisis");
      return;
    }

    const nextAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(nextAnswers);

    if (questionIndex === selectedProfile.base.length) {
      await requestFollowUps(nextAnswers, selectedProfile);
      setQuestionIndex(questionIndex + 1);
      return;
    }

    if (questionIndex === questions.length - 1) {
      setStep("result");
      return;
    }

    setQuestionIndex(questionIndex + 1);
  };

  return (
    <main className="bg-[#f6f9fc] px-4 py-10 sm:py-14">
      <Helmet>
        <title>Find Your Care Path | Tinka Health Services</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Explore an appropriate next step for care at Tinka Health Services. This guide does not provide a diagnosis or emergency support."
        />
      </Helmet>
      <section className="mx-auto max-w-3xl rounded-2xl border border-[#d5e5f4] bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#005ab0]">
          Tinka Health Services
        </p>
        {step === "details" && (
          <>
            <h1 className="mt-2 text-3xl font-bold text-[#06192f] sm:text-4xl">
              Tell us a little about what you need
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-slate-700">
              Share the kind of support you&apos;re looking for, then answer a few quick
              questions to help guide the next step.
            </p>
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
              This tool does not diagnose conditions or provide emergency care.
              If you are in immediate danger, call 911 or 988 now.
            </p>
            <form className="mt-7 grid gap-5 sm:grid-cols-2" onSubmit={submitLead}>
              <label className="block text-sm font-semibold text-slate-800">
                First name
                <input
                  required
                  autoComplete="given-name"
                  value={lead.name}
                  onChange={(event) => setLead({ ...lead, name: event.target.value })}
                  className="mt-2 min-h-12 w-full rounded-lg border border-slate-300 px-3 font-normal outline-none focus:border-[#005ab0] focus:ring-2 focus:ring-[#005ab0]/20"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-800">
                Email address
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={lead.email}
                  onChange={(event) => setLead({ ...lead, email: event.target.value })}
                  className="mt-2 min-h-12 w-full rounded-lg border border-slate-300 px-3 font-normal outline-none focus:border-[#005ab0] focus:ring-2 focus:ring-[#005ab0]/20"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-800">
                Phone number
                <input
                  required
                  type="tel"
                  autoComplete="tel"
                  value={lead.phone}
                  onChange={(event) => setLead({ ...lead, phone: event.target.value })}
                  className="mt-2 min-h-12 w-full rounded-lg border border-slate-300 px-3 font-normal outline-none focus:border-[#005ab0] focus:ring-2 focus:ring-[#005ab0]/20"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-800">
                Where do you live?
                <select
                  required
                  value={lead.state}
                  onChange={(event) => setLead({ ...lead, state: event.target.value })}
                  className="mt-2 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 font-normal outline-none focus:border-[#005ab0] focus:ring-2 focus:ring-[#005ab0]/20"
                >
                  <option value="">Choose one</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Washington, DC">Washington, DC</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className="block text-sm font-semibold text-slate-800 sm:col-span-2">
                What support are you looking for?
                <select
                  required
                  value={lead.service}
                  onChange={(event) => setLead({ ...lead, service: event.target.value })}
                  className="mt-2 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 font-normal outline-none focus:border-[#005ab0] focus:ring-2 focus:ring-[#005ab0]/20"
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex gap-3 text-sm leading-6 text-slate-700 sm:col-span-2">
                <input
                  required
                  type="checkbox"
                  checked={lead.consent}
                  onChange={(event) => setLead({ ...lead, consent: event.target.checked })}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#005ab0]"
                />
                I agree that Tinka Health Services may contact me about care.
                Please do not include private medical details in this form.
              </label>
              {formError && <p className="text-sm font-medium text-red-700 sm:col-span-2">{formError}</p>}
              <button
                type="submit"
                disabled={isSubmittingLead}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#005ab0] px-6 font-bold text-white hover:bg-[#00427f] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
              >
                {isSubmittingLead ? "Saving your details..." : "Continue to questions"}
                <FiArrowRight aria-hidden="true" />
              </button>
            </form>
          </>
        )}

        {step === "questions" && currentQuestion && (
          <>
            <p className="mt-6 text-sm font-semibold text-[#005ab0]">
              Question {questionIndex + 1} of {questions.length}
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#dbeaf7]">
              <div
                className="h-full rounded-full bg-[#005ab0] transition-[width]"
                style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
            <h1 className="mt-7 text-3xl font-bold text-[#06192f] sm:text-4xl">
              {currentQuestion.label}
            </h1>
            {currentQuestion.helper && <p className="mt-3 text-slate-600">{currentQuestion.helper}</p>}
            <div className="mt-7 grid gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  disabled={isLoadingFollowUp}
                  onClick={() => answerQuestion(option.value)}
                  className="min-h-14 rounded-lg border border-[#bdd7ee] bg-white px-5 text-left font-semibold text-[#123456] transition hover:border-[#005ab0] hover:bg-[#eef6fd] disabled:cursor-wait disabled:opacity-60"
                >
                  {option.label}
                </button>
              ))}
            </div>
            {isLoadingFollowUp && <p className="mt-5 text-sm text-slate-600">Preparing the final questions...</p>}
            {questionIndex > 0 && !isLoadingFollowUp && (
              <button
                type="button"
                onClick={() => setQuestionIndex(questionIndex - 1)}
                className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-[#005ab0] hover:underline"
              >
                <FiArrowLeft aria-hidden="true" /> Back
              </button>
            )}
          </>
        )}

        {step === "crisis" && (
          <>
            <h1 className="mt-3 text-3xl font-bold text-[#06192f]">Please get immediate support now.</h1>
            <p className="mt-4 leading-7 text-slate-700">
              This guide cannot provide emergency help. If you or someone else may be in immediate danger, call 911. You can also call or text 988 in the United States for the Suicide & Crisis Lifeline.
            </p>
            <a
              href="tel:988"
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#005ab0] px-6 font-bold text-white hover:bg-[#00427f]"
            >
              <FiPhoneCall aria-hidden="true" /> Call 988
            </a>
          </>
        )}

        {step === "result" && (
          <>
            <FiCheckCircle className="mt-6 text-[#16844c]" size={44} aria-hidden="true" />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-[#005ab0]">Your care path result</p>
            <div className="mt-5 inline-flex items-baseline gap-2 rounded-lg bg-[#eef6fd] px-4 py-3 text-[#06192f]">
              <span className="text-3xl font-bold">{result.score}/10</span>
              <span className="text-sm font-semibold">Next-step score</span>
            </div>
            <h1 className="mt-5 text-3xl font-bold text-[#06192f] sm:text-4xl">{result.title}</h1>
            <p className="mt-5 max-w-2xl leading-7 text-slate-700">{result.copy}</p>
            <p className="mt-4 rounded-lg bg-[#eef6fd] p-4 text-sm leading-6 text-slate-700">
              You selected: <strong>{lead.service}</strong>. The next-step score reflects only the answers you chose. It is not a diagnosis or medical assessment.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BookingLink href="/booking?source=care-finder" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#005ab0] px-6 font-bold text-white hover:bg-[#00427f]">
                Book an Appointment
              </BookingLink>
              <a href="tel:+14432956600" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#9fc8ee] px-6 font-bold text-[#005ab0] hover:bg-[#eef6fd]">
                Call Our Team
              </a>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default CareFinder;
