import React from "react";
import { Helmet } from "react-helmet";

const BookingStructuredData = () => {
  const bookingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Book Psychiatric Appointment in MD, DC and VA | Tinka Health",
    description:
      "Book telehealth and in-person psychiatric appointments with Tinka Health Services in Maryland, Washington DC, and Virginia. Accepting Medicaid, Medicare, and major insurance plans.",
    url: "https://tinkahealthservices.com/booking",
    mainEntity: {
      "@type": "MedicalOrganization",
      name: "Tinka Health Services",
      url: "https://tinkahealthservices.com",
      logo: "https://tinkahealthservices.com/images/logo/Tinka_health_logo.png",
      telephone: "+1-410-870-0629",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5457 Twin Knolls Road, Suite 300",
        addressLocality: "Columbia",
        addressRegion: "MD",
        postalCode: "21045",
        addressCountry: "US",
      },
      areaServed: ["Maryland", "Washington, DC", "Virginia"],
      medicalSpecialty: ["Psychiatry", "MentalHealth", "Telemedicine"],
      healthPlanNetworkId: ["Medicaid", "Medicare", "Aetna", "CareFirst"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Psychiatry and Mental Health Appointment Booking",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Initial Consultation",
              description:
                "Comprehensive initial mental health assessment and consultation",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Follow-up Therapy Session",
              description:
                "Ongoing therapy sessions for mental health treatment",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Medication Management Appointment",
              description: "Psychiatric medication evaluation and management",
            },
            availability: "https://schema.org/InStock",
          },
        ],
      },
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_108462",
        inLanguage: "en-US",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        reservationFor: {
          "@type": "Service",
          name: "Psychiatric Appointment",
        },
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(bookingStructuredData)}
      </script>
    </Helmet>
  );
};

export default BookingStructuredData;
