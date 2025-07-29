import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import NavItem from "./components/NavItem";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import ScrollToTop from "./components/ScrollToTop ";

function App() {
  useEffect(() => {
    const hasConsent = document.cookie.includes("CookieConsent=true");
    if (hasConsent) {
      loadTrackingScripts();
    }
  }, []);

  const loadTrackingScripts = () => {
    // 🟢 Google Analytics
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

    // 🟢 Tawk.to — same structure as original embed
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    (function () {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/67321dab2480f5b4f59bb5a6/1icds7pcj";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  };

  return (
    <>
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
        containerClasses="w-full flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4 bg-gray-800 text-white z-50 fixed bottom-0 shadow-lg"
        contentClasses="text-sm text-white max-w-xl"
        buttonClasses="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-md transition"
        declineButtonClasses="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md transition"
        onAccept={() => {
          loadTrackingScripts();
        }}
        onDecline={() => {
          // Cookies declined
        }}
      >
        This website uses cookies to enhance your experience. You can accept or
        reject.
      </CookieConsent>
    </>
  );
}

export default App;
