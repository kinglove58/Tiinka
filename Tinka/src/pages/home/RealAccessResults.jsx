import { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiMapPin, FiShield } from "react-icons/fi";

const stats = [
  {
    value: 3,
    suffix: "",
    title: "Regions served",
    description:
      "Mental health care across Maryland, Washington DC, and Virginia with telehealth access when eligible.",
    icon: FiMapPin,
    accent: "bg-[#eaf5ff]",
    graphic: "network",
  },
  {
    value: 60,
    suffix: "+",
    title: "Accepted plan listings",
    description:
      "Medicaid, Medicare, and many commercial insurance plans listed by state for easier benefit checks.",
    icon: FiShield,
    accent: "bg-[#eef7fb]",
    graphic: "bars",
  },
  {
    value: 1,
    suffix: "",
    title: "Simpler care path",
    description:
      "Book one appointment, confirm coverage details, and start with a clear plan for follow-up care.",
    icon: FiCheckCircle,
    accent: "bg-[#f4f9fd]",
    graphic: "progress",
  },
];

const useInView = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return [ref, isVisible];
};

const useCountUp = (target, shouldRun) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldRun) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setValue(target);
      return undefined;
    }

    let frameId;
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, shouldRun]);

  return value;
};

const NetworkGraphic = ({ active }) => {
  const dots = [
    { left: "50%", top: "16%", delay: 0 },
    { left: "70%", top: "28%", delay: 75 },
    { left: "76%", top: "52%", delay: 100 },
    { left: "63%", top: "72%", delay: 150 },
    { left: "38%", top: "72%", delay: 200 },
    { left: "24%", top: "52%", delay: 300 },
    { left: "30%", top: "28%", delay: 500 },
  ];

  return (
    <div className="relative mx-auto h-36 w-full max-w-72 rounded-lg border border-white/80 bg-white/35">
      <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8bc2ee] bg-white/70" />
      <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#005ab0] text-white">
        <FiCheckCircle aria-hidden="true" className="h-5 w-5" />
      </div>
      {dots.map((dot) => (
        <span
          key={`${dot.left}-${dot.top}`}
          className={`absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#005ab0] shadow-sm transition duration-700 ${
            active ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          style={{
            left: dot.left,
            top: dot.top,
            transitionDelay: `${dot.delay}ms`,
          }}
        />
      ))}
    </div>
  );
};

const BarsGraphic = ({ active }) => (
  <div className="mx-auto flex h-36 w-full max-w-72 items-end justify-center gap-5 rounded-lg border border-white/80 bg-white/35 px-10 py-8">
    {[46, 72, 100].map((height, index) => (
      <span
        key={height}
        className="w-12 rounded-t-lg bg-gradient-to-t from-[#005ab0] to-[#77c7f4] transition-transform duration-700"
        style={{
          height: `${height}%`,
          transform: active ? "scaleY(1)" : "scaleY(0.12)",
          transformOrigin: "bottom",
          transitionDelay: `${index * 120}ms`,
        }}
      />
    ))}
  </div>
);

const ProgressGraphic = ({ active }) => {
  const circumference = 2 * Math.PI * 42;

  return (
    <div className="mx-auto flex h-36 w-full max-w-72 items-center justify-center rounded-lg border border-white/80 bg-white/35">
      <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90">
        <circle
          cx="60"
          cy="60"
          r="42"
          fill="none"
          stroke="#d7ebfa"
          strokeWidth="16"
        />
        <circle
          cx="60"
          cy="60"
          r="42"
          fill="none"
          stroke="#005ab0"
          strokeLinecap="round"
          strokeWidth="16"
          strokeDasharray={circumference}
          strokeDashoffset={active ? circumference * 0.18 : circumference}
          className="transition-[stroke-dashoffset] duration-1000"
        />
      </svg>
    </div>
  );
};

const StatGraphic = ({ type, active }) => {
  if (type === "network") return <NetworkGraphic active={active} />;
  if (type === "bars") return <BarsGraphic active={active} />;
  return <ProgressGraphic active={active} />;
};

const ResultCard = ({ stat, active, index }) => {
  const count = useCountUp(stat.value, active);
  const Icon = stat.icon;

  return (
    <article
      className={`group flex min-h-[390px] flex-col justify-between rounded-lg ${stat.accent} px-6 py-7 text-center shadow-sm ring-1 ring-[#cfe3f6] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_-35px_rgba(0,90,176,0.55)] md:min-h-[430px] md:px-7 md:py-9 ${
        active ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      <StatGraphic type={stat.graphic} active={active} />

      <div>
        <div className="mb-3 flex items-center justify-center gap-2">
          <Icon aria-hidden="true" className="h-5 w-5 text-[#005ab0]" />
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#005ab0]">
            {stat.title}
          </p>
        </div>
        <h3 className="text-6xl font-semibold italic leading-none text-[#06192f] md:text-7xl">
          {count}
          {active ? stat.suffix : ""}
        </h3>
        <p className="mx-auto mt-5 max-w-xs text-base font-semibold leading-7 text-slate-800 md:text-lg">
          {stat.description}
        </p>
      </div>
    </article>
  );
};

const RealAccessResults = () => {
  const [sectionRef, isVisible] = useInView();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="real-access-results-heading"
      className="bg-white px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            Care access, simplified
          </p>
          <h2
            id="real-access-results-heading"
            className="text-4xl font-extrabold leading-tight text-[#06192f] md:text-6xl"
          >
            Real access for{" "}
            <span className="font-serif italic font-normal text-[#005ab0]">
              real change
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Start with the things that make care easier to begin: local coverage,
            insurance-friendly scheduling, and a clear first step.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-7">
          {stats.map((stat, index) => (
            <ResultCard
              key={stat.title}
              stat={stat}
              active={isVisible}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            to="/insurance-we-accept"
            className="inline-flex items-center gap-4 rounded-full bg-[#005ab0] px-6 py-4 text-base font-bold text-white shadow-[0_16px_35px_rgba(0,90,176,0.22)] transition hover:bg-[#00427f]"
          >
            Check Insurance We Accept
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
              <FiArrowRight aria-hidden="true" className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(RealAccessResults);
