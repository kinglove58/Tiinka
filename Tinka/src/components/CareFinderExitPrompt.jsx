import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiX } from "react-icons/fi";

const DISMISS_KEY = "tinka-care-finder-dismissed-at";
const DISMISS_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

const recentlyDismissed = () => {
  const dismissedAt = Number(window.localStorage.getItem(DISMISS_KEY));
  return Number.isFinite(dismissedAt) && Date.now() - dismissedAt < DISMISS_WINDOW_MS;
};

const CareFinderExitPrompt = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/care-finder" || recentlyDismissed()) return undefined;

    let canShow = false;
    const enablePrompt = () => {
      canShow = true;
    };
    const showPrompt = () => {
      if (canShow && !recentlyDismissed()) setIsOpen(true);
    };
    const handleMouseLeave = (event) => {
      if (window.innerWidth >= 768 && event.clientY <= 0) showPrompt();
    };
    const handleScroll = () => {
      if (window.innerWidth >= 768 || pathname !== "/") return;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight > 0 && window.scrollY / scrollableHeight >= 0.6) showPrompt();
    };

    const delay = window.setTimeout(enablePrompt, 5000);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(delay);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end bg-[#06192f]/45 p-4 sm:items-center sm:justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="care-finder-exit-heading"
    >
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
          aria-label="Close care finder"
        >
          <FiX size={22} aria-hidden="true" />
        </button>
        <p className="pr-10 text-sm font-bold uppercase tracking-[0.12em] text-[#005ab0]">
          Before you go
        </p>
        <h2
          id="care-finder-exit-heading"
          className="mt-2 text-2xl font-bold text-[#06192f] sm:text-3xl"
        >
          Find a clearer next step for care.
        </h2>
        <p className="mt-3 leading-7 text-slate-700">
          Answer a few private, multiple-choice questions to explore the Tinka
          service that may fit your needs. This is not a diagnosis or emergency
          service.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/care-finder"
            onClick={dismiss}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#005ab0] px-5 font-bold text-white hover:bg-[#00427f]"
          >
            Start the Care Finder <FiArrowRight aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="min-h-12 rounded-lg border border-slate-300 px-5 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareFinderExitPrompt;
