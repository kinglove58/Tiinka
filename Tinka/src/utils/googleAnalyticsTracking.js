export const GOOGLE_ANALYTICS_ID = "G-FF5582HDSD";

export const trackGa4BookingStarted = () => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "booking_started", {
    send_to: GOOGLE_ANALYTICS_ID,
  });
};
