export const GOOGLE_ADS_ID = "AW-17341962831";
export const CONTACT_CONVERSION_ID = `${GOOGLE_ADS_ID}/-VdbCLO_3O4aEM-0pc1A`;

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
