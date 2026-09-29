export const GOOGLE_ADS_ID = "AW-17341962831";
export const CONTACT_CONVERSION_ID = `${GOOGLE_ADS_ID}/-VdbClO_3O4aEM-0pc1A`;
export const BOOKING_STARTED_CONVERSION_ID = `${GOOGLE_ADS_ID}/osU9CLKh6IodEM-0pc1A`;

const trackGoogleAdsConversion = (sendTo) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return false;
  }

  window.gtag("event", "conversion", {
    send_to: sendTo,
  });

  return true;
};

export const trackContactConversion = () =>
  trackGoogleAdsConversion(CONTACT_CONVERSION_ID);

// A click to enter Tebra is a booking start, never a completed appointment.
// Use Google's click callback (with a timeout) so navigation does not cancel the ping.
export const trackBookingStartedConversion = (url = "/booking") => {
  if (typeof window === "undefined") return;

  let navigated = false;
  const navigate = () => {
    if (navigated) return;
    navigated = true;
    window.location.assign(url);
  };

  if (typeof window.gtag !== "function") {
    navigate();
    return;
  }

  window.gtag("event", "conversion", {
    send_to: BOOKING_STARTED_CONVERSION_ID,
    event_callback: navigate,
    event_timeout: 1000,
  });
  window.setTimeout(navigate, 1000);
};
