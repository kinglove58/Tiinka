import React from "react";
import ServiceStylePage from "../shared/ServiceStylePage";

const VirginiaPsychiatrist = () => {
  const canonicalUrl = "https://tinkahealthservices.com/virginia-psychiatrist";
  const metaTitle =
    "Psychiatric Provider in Virginia | Medicaid, Medicare and Telehealth | Tinka Health Services";
  const metaDescription =
    "Find a psychiatric provider in Virginia for anxiety, depression, ADHD, bipolar disorder, and medication management. Tinka Health Services offers telehealth psychiatry across Virginia and accepts Medicaid, Medicare, Anthem, Aetna, Cigna, Optum, and other major insurance plans.";

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
        name: "Virginia Psychiatrist",
        item: canonicalUrl,
      },
    ],
  };

  const virginiaServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${canonicalUrl}#clinic`,
    name: "Tinka Health Services - Virginia Psychiatry",
    url: canonicalUrl,
    description: metaDescription,
    image: "https://tinkahealthservices.com/images/services/Mental_Health.jpg",
    telephone: "+1 571-349-8285",
    medicalSpecialty: "Psychiatry",
    areaServed: {
      "@type": "State",
      name: "Virginia",
    },
    availableService: [
      {
        "@type": "MedicalService",
        name: "Psychiatric Evaluation",
      },
      {
        "@type": "MedicalService",
        name: "Medication Management",
      },
      {
        "@type": "MedicalService",
        name: "Telehealth Psychiatry",
      },
    ],
    provider: {
      "@type": "MedicalOrganization",
      name: "Tinka Health Services",
      url: "https://tinkahealthservices.com",
      telephone: "+1 571-349-8285",
    },
  };

  const virginiaWebPageStructuredData = {
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
      currentPath="/virginia-psychiatrist"
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      keywords={[
        "psychiatric provider in virginia",
        "telehealth psychiatry virginia",
        "virginia medicaid psychiatrist",
        "psychiatrist accepting medicare virginia",
        "medication management virginia",
        "mental health provider virginia",
      ]}
      heroTitle="Psychiatric Provider in Virginia"
      heroSubtitle="Telehealth psychiatry and medication management across Virginia"
      intro={{
        title: "Psychiatric services in Virginia with flexible online access",
        description: [
          "Tinka Health Services provides psychiatric evaluations, medication management, and ongoing follow-up care for adults throughout Virginia using secure telehealth appointments.",
          "We support patients managing anxiety, depression, ADHD, bipolar disorder, PTSD, and mood-related concerns while accepting Medicaid, Medicare, Anthem, Aetna, Cigna, Optum, and other major insurance plans in Virginia.",
        ],
      }}
      ctaText="Book Virginia Appointment"
      callHref="tel:+15713498285"
      callText="Call 571-349-8285"
      sectionOne={{
        title: "When psychiatric care can help Virginia patients",
        description:
          "Adults across Virginia often reach out for psychiatric support when symptoms begin affecting sleep, focus, stress tolerance, work responsibilities, or family life. A clear evaluation can help identify what is happening and what kind of treatment may help most.",
        items: [
          "Anxiety, panic, or chronic worry that makes daily functioning harder",
          "Depression, emotional numbness, or low energy that continues over time",
          "ADHD symptoms that affect organization, attention, and follow-through",
          "Mood changes, irritability, or unstable symptoms that need closer review",
          "PTSD, trauma-related symptoms, or sleep problems that disrupt recovery",
          "Questions about medication effectiveness, side effects, or treatment options",
        ],
      }}
      sectionTwo={{
        title: "What Tinka Health Services includes for Virginia psychiatry care",
        description:
          "Our Virginia telehealth model is built to keep psychiatric treatment accessible, consistent, and responsive to each patient's needs over time.",
        items: [
          "Comprehensive psychiatric evaluations to better understand symptoms and diagnosis",
          "Medication management appointments with monitoring and treatment adjustments",
          "Telehealth access that allows patients across Virginia to receive care from home",
          "Insurance-friendly options that include Medicaid, Medicare, and major commercial plans",
          "Treatment planning tailored to symptom patterns, medical history, and patient goals",
          "Regular follow-up care designed to support function, stability, and long-term progress",
        ],
      }}
      structuredData={[
        breadcrumbStructuredData,
        virginiaServiceStructuredData,
        virginiaWebPageStructuredData,
      ]}
    />
  );
};

export default VirginiaPsychiatrist;
