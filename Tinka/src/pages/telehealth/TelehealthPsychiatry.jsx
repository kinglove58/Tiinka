import React from "react";
import ServiceStylePage from "../shared/ServiceStylePage";

const TelehealthPsychiatry = () => {
  const canonicalUrl =
    "https://tinkahealthservices.com/telehealth-psychiatry-md-dc-va";
  const metaTitle =
    "Telehealth Psychiatry in MD, DC and VA | Online Medication Management | Tinka Health Services";
  const metaDescription =
    "Get telehealth psychiatry in Maryland, Washington DC, and Virginia with Tinka Health Services. Online psychiatric evaluations, medication management, and follow-up care are available from home with insurance accepted, including Medicaid and Medicare when eligible.";

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tinkahealthservices.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Telehealth Psychiatry in MD, DC and VA",
        item: canonicalUrl,
      },
    ],
  };

  const telehealthServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: "Telehealth Psychiatry",
    serviceType: "Online Psychiatric Care and Medication Management",
    url: canonicalUrl,
    description: metaDescription,
    image: "https://tinkahealthservices.com/images/services/Mental_Health.jpg",
    provider: {
      "@type": "MedicalOrganization",
      name: "Tinka Health Services",
      url: "https://tinkahealthservices.com",
      telephone: "+1 443-295-6600",
    },
    areaServed: [
      { "@type": "State", name: "Maryland" },
      { "@type": "AdministrativeArea", name: "Washington DC" },
      { "@type": "State", name: "Virginia" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: canonicalUrl,
      availableLanguage: ["English"],
      servicePhone: "+1 443-295-6600",
    },
  };

  const telehealthWebPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metaTitle,
    url: canonicalUrl,
    description: metaDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "Tinka Health Services",
      url: "https://tinkahealthservices.com",
    },
    about: {
      "@type": "MedicalSpecialty",
      name: "Psychiatry",
    },
  };

  return (
    <ServiceStylePage
      canonicalUrl={canonicalUrl}
      currentPath="/telehealth-psychiatry-md-dc-va"
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      keywords={[
        "telehealth psychiatry maryland",
        "telehealth psychiatry dc medicaid",
        "telehealth psychiatry virginia",
        "online psychiatric provider",
        "virtual medication management",
        "telehealth psychiatry covered by insurance",
      ]}
      heroTitle="Telehealth Psychiatry in MD, DC and VA"
      heroSubtitle="Online psychiatric care and medication management from home"
      intro={{
        title: "Virtual psychiatry with the same clinical focus as in-person care",
        description: [
          "Tinka Health Services offers telehealth psychiatry appointments for adults in Maryland, Washington DC, and Virginia, including psychiatric evaluations, medication management, and ongoing follow-up care.",
          "Our virtual care model makes it easier to start treatment from home while using accepted insurance plans, including Medicaid, Medicare, and major commercial coverage when eligible.",
        ],
      }}
      ctaText="Book Telehealth Appointment"
      callHref="tel:+14432956600"
      callText="Call 443-295-6600"
      sectionOne={{
        title: "Why many patients prefer telehealth psychiatry",
        description:
          "Telehealth psychiatry can remove common barriers that delay mental health treatment. For many patients, online care makes it easier to schedule visits, stay consistent with follow-up, and receive support without unnecessary travel.",
        items: [
          "Appointments from home that reduce commute time and transportation barriers",
          "More flexibility for work schedules, caregiving demands, and school routines",
          "Ongoing medication management without needing to travel to an office",
          "Privacy and convenience for patients who feel more comfortable meeting virtually",
          "Consistent access to psychiatric follow-up across Maryland, DC, and Virginia",
          "A practical option for starting care sooner when timely treatment matters",
        ],
      }}
      sectionTwo={{
        title: "How Tinka Health Services delivers online psychiatric care",
        description:
          "Our telehealth psychiatry services are structured to keep care clear, clinically focused, and easy to continue over time as your needs change.",
        items: [
          "Comprehensive virtual psychiatric evaluations for diagnosis and treatment planning",
          "Medication management appointments tailored to symptoms, response, and side effects",
          "Follow-up care that supports treatment adjustments and ongoing symptom review",
          "Insurance-friendly scheduling with accepted plans across Maryland, Washington DC, and Virginia",
          "A secure virtual visit model that keeps psychiatric care accessible from home",
          "Clear next steps for patients seeking practical, ongoing mental health support online",
        ],
      }}
      structuredData={[
        breadcrumbStructuredData,
        telehealthServiceStructuredData,
        telehealthWebPageStructuredData,
      ]}
    />
  );
};

export default TelehealthPsychiatry;
