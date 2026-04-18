import { useEffect } from "react";

const CanonicalLink = ({ href }) => {
  useEffect(() => {
    if (!href) return;

    const selector = 'link[rel="canonical"]';
    const existingLinks = Array.from(document.head.querySelectorAll(selector));

    // Keep a single canonical link in the document head to avoid ambiguity.
    existingLinks.slice(1).forEach((link) => link.remove());

    let canonicalLink = document.head.querySelector(selector);
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", href);
  }, [href]);

  return null;
};

export default CanonicalLink;
