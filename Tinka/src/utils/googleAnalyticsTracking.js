export const GOOGLE_ANALYTICS_ID = "G-NWJGB7S20C";

export const trackGa4BookingStarted = () => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "booking_started", {
    send_to: GOOGLE_ANALYTICS_ID,
  });
};
