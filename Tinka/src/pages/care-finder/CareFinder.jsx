import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiPhoneCall } from "react-icons/fi";
import BookingLink from "../../components/BookingLink";
import serviceData from "../services/serviceData";
import {
  CARE_FINDER_API_URL,
  CARE_FINDER_FALLBACK_QUESTION_IDS,
  CARE_FINDER_FORMSPREE_ENDPOINT,
} from "../../config/careFinder";
import { trackContactConversion } from "../../utils/googleAdsTracking";

const baseQuestions = [
  {
    id: "safety",
    label: "Are you safe right now?",
    helper: "This guide is not for emergencies.",
    options: [
      { value: "safe", label: "Yes, I am safe right now" },
      { value: "urgent", label: "I need urgent help now" },
    ],
  },
  {
    id: "impact",
    label: "How much is this affecting your daily life?",
    options: [
      { value: "a-little", label: "A little" },
      { value: "somewhat", label: "Somewhat" },
      { value: "a-lot", label: "A lot" },
    ],
  },
  {
    id: "duration",
    label: "How long have you been looking for support?",
    options: [
      { value: "recently", label: "Recently" },
      { value: "weeks", label: "A few weeks" },
      { value: "months", label: "Several months or longer" },
    ],
  },
  {
    id: "visitPreference",
    label: "What type of care would work best for you?",
    options: [
      { value: "virtual", label: "Virtual visits" },
      { value: "in-person", label: "In-person visits" },
      { value: "either", label: "Either option" },
    ],
  },
];

const followUpQuestions = {
  careGoals: {
    id: "careGoals",
    label: "What would feel most helpful right now?",
    options: [
      { value: "understanding", label: "Understanding what support may fit" },
      { value: "consistent-care", label: "Ongoing care and follow-up" },
      { value: "next-step", label: "A clear next step" },
    ],
  },
  careHistory: {
    id: "careHistory",
    label: "Have you worked with a mental health provider before?",
    options: [
      { value: "new", label: "No, this would be my first time" },
      { value: "past", label: "Yes, in the past" },
      { value: "current", label: "Yes, I currently have support" },
    ],
  },
  dailyFunctioning: {
    id: "dailyFunctioning",
    label: "Which part of life feels most affected?",
    options: [
      { value: "work-school", label: "Work or school" },
      { value: "relationships", label: "Relationships or family" },
      { value: "routine", label: "Sleep, routines, or daily tasks" },
    ],
  },
  timing: {
    id: "timing",
    label: "When would you like to begin care?",
    options: [
      { value: "soon", label: "As soon as possible" },
      { value: "next-few-weeks", label: "In the next few weeks" },
      { value: "exploring", label: "I am still exploring options" },
    ],
  },
};

const getResult = (answers) => {
  const points =
    (answers.impact === "a-lot" ? 3 : answers.impact === "somewhat" ? 2 : 1) +
    (answers.duration === "months" ? 2 : answers.duration === "weeks" ? 1 : 0) +
    (answers.timing === "soon" ? 2 : 0);

  if (points >= 5) {
    return {
      title: "A focused care conversation may be a helpful next step.",
      copy: "Your answers suggest that scheduling time with a Tinka Health Services provider could help you review your needs, care options, and a practical plan.",
    };
  }

  return {
    title: "You can begin with a supportive first conversation.",
    copy: "A Tinka Health Services provider can listen to what is going on, discuss available support, and help you decide on an appropriate next step.",
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
  const [questions, setQuestions] = useState(baseQuestions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [isLoadingFollowUp, setIsLoadingFollowUp] = useState(false);
  const [formError, setFormError] = useState("");

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
      setStep("questions");
    } catch {
      setFormError(
        "We could not save your contact details. Please try again or call 443-295-6600.",
      );
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const requestFollowUps = async (nextAnswers) => {
    setIsLoadingFollowUp(true);
    const anonymousAnswers = Object.entries(nextAnswers)
      .filter(([id]) => id !== "safety")
      .map(([id, value]) => ({ id, value }));

    try {
      const response = await fetch(CARE_FINDER_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service: lead.service, answers: anonymousAnswers }),
      });
      if (!response.ok) throw new Error("Care finder unavailable");

      const data = await response.json();
      const selectedIds = Array.isArray(data.followUpQuestionIds)
        ? data.followUpQuestionIds.filter((id) => followUpQuestions[id]).slice(0, 2)
        : [];
      const ids = selectedIds.length === 2 ? selectedIds : CARE_FINDER_FALLBACK_QUESTION_IDS;
      setQuestions([...baseQuestions, ...ids.map((id) => followUpQuestions[id])]);
    } catch {
      setQuestions([
        ...baseQuestions,
        ...CARE_FINDER_FALLBACK_QUESTION_IDS.map((id) => followUpQuestions[id]),
      ]);
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

    if (questionIndex === baseQuestions.length - 1) {
      await requestFollowUps(nextAnswers);
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
              Find your care path
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-slate-700">
              Tell us how to reach you and the type of support you are looking
              for. We will then ask a few brief, multiple-choice questions.
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
            <h1 className="mt-2 text-3xl font-bold text-[#06192f] sm:text-4xl">{result.title}</h1>
            <p className="mt-5 max-w-2xl leading-7 text-slate-700">{result.copy}</p>
            <p className="mt-4 rounded-lg bg-[#eef6fd] p-4 text-sm leading-6 text-slate-700">
              You selected: <strong>{lead.service}</strong>. This result is a guide for starting a conversation and is not a diagnosis.
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
