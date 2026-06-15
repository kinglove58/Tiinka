import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import NavItem from "./components/NavItem";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import ScrollToTop from "./components/ScrollToTop ";
import StructuredData from "./components/StructuredData";
import CanonicalLink from "./components/CanonicalLink";

const SITE_URL = "https://tinkahealthservices.com";

const MANAGED_HEAD_SELECTORS = [
  'meta[name="description"]',
  'meta[name="keywords"]',
  'meta[name="robots"]',
  'meta[name="twitter:card"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
  'meta[name="twitter:image"]',
  'meta[property="og:type"]',
  'meta[property="og:site_name"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:url"]',
  'meta[property="og:image"]',
];

const getCanonicalHref = (pathname) => {
  if (!pathname || pathname === "/") return SITE_URL;
  return `${SITE_URL}${pathname.replace(/\/+$/, "")}`;
};

const removeDuplicateManagedHeadTags = () => {
  MANAGED_HEAD_SELECTORS.forEach((selector) => {
    const tags = Array.from(document.head.querySelectorAll(selector));
    if (tags.length <= 1) return;

    const preferredTag =
      [...tags].reverse().find((tag) => tag.hasAttribute("data-react-helmet")) ||
      tags[tags.length - 1];

    tags.forEach((tag) => {
      if (tag !== preferredTag) {
        tag.remove();
      }
    });
  });
};

const RouteHeadManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let frameId;
    const scheduleCleanup = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      frameId = window.requestAnimationFrame(removeDuplicateManagedHeadTags);
    };

    scheduleCleanup();

    const observer = new MutationObserver(scheduleCleanup);
    observer.observe(document.head, { childList: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      observer.disconnect();
    };
  }, [pathname]);

  return <CanonicalLink href={getCanonicalHref(pathname)} />;
};

function App() {
  useEffect(() => {
    // Only load tracking scripts if consent is given
    const hasConsent = document.cookie.includes("CookieConsent=true");
    if (hasConsent) {
      loadTrackingScripts();
    }
  }, []);

  const loadTrackingScripts = () => {
    // 🟢 Google Analytics - only loaded with consent
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-ZNHLPY51ZS";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZNHLPY51ZS');
  `;
    document.head.appendChild(inlineScript);
  };

  return (
    <>
      {/* Global Structured Data */}
      <StructuredData />
      <RouteHeadManager />

      <div className="flex flex-col min-h-screen bg-gray-200">
        <ScrollToTop />
        <NavItem />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
        <ScrollUp />
      </div>

      {/* Tailwind-Styled Cookie Banner */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Reject"
        enableDeclineButton
        cookieName="CookieConsent"
        disableStyles
        containerClasses="fixed inset-x-0 bottom-0 z-50 flex max-h-[32vh] w-full flex-col gap-2 overflow-y-auto border-t border-white/10 bg-gray-800 px-3 py-3 text-white shadow-lg sm:max-h-none sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:overflow-visible sm:px-5 sm:py-4"
        contentClasses="min-w-0 text-xs leading-5 text-white sm:max-w-2xl sm:flex-1 sm:text-sm sm:leading-6"
        buttonWrapperClasses="grid grid-cols-2 gap-2 sm:flex sm:shrink-0 sm:flex-row sm:gap-3"
        buttonClasses="w-full whitespace-nowrap rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-[#06192f] transition hover:bg-yellow-300 sm:w-auto sm:px-5"
        declineButtonClasses="w-full whitespace-nowrap rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-500 sm:w-auto sm:px-5"
        onAccept={() => {
          loadTrackingScripts(); // Only load Google Analytics on consent
        }}
        onDecline={() => {
          // Cookies declined - no tracking
        }}
      >
        This website uses cookies to improve your experience.
      </CookieConsent>
    </>
  );
}

export default App;
