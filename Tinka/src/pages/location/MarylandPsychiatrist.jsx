import React from "react";
import ServiceStylePage from "../shared/ServiceStylePage";

const MarylandPsychiatrist = () => {
  const canonicalUrl = "https://tinkahealthservices.com/maryland-psychiatrist";
  const metaTitle =
    "Psychiatric Provider in Maryland | Medicaid, Medicare and Telehealth | Tinka Health Services";
  const metaDescription =
    "Find a psychiatric provider in Maryland for anxiety, depression, ADHD, bipolar disorder, PTSD, and medication management. Tinka Health Services accepts Medicaid, Medicare, and major insurance plans with telehealth psychiatry appointments across Maryland.";

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
        name: "Maryland Psychiatrist",
        item: canonicalUrl,
      },
    ],
  };

  const marylandServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${canonicalUrl}#clinic`,
    name: "Tinka Health Services - Maryland Psychiatry",
    url: canonicalUrl,
    description: metaDescription,
    image: "https://tinkahealthservices.com/images/services/Mental_Health.jpg",
    telephone: "+1 443-295-6600",
    medicalSpecialty: "Psychiatry",
    areaServed: {
      "@type": "State",
      name: "Maryland",
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
      telephone: "+1 443-295-6600",
    },
  };

  const marylandWebPageStructuredData = {
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
      currentPath="/maryland-psychiatrist"
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      keywords={[
        "psychiatric provider in maryland",
        "maryland psychiatrist accepting medicaid",
        "telehealth psychiatry maryland",
        "medication management maryland",
        "maryland psychiatric nurse practitioner",
        "psychiatrist accepting medicare maryland",
      ]}
      heroTitle="Psychiatric Provider in Maryland"
      heroSubtitle="Insurance-friendly telehealth psychiatry across Maryland"
      intro={{
        title: "Psychiatric care in Maryland designed for access and continuity",
        description: [
          "Tinka Health Services provides psychiatric evaluations, medication management, and follow-up care for adults across Maryland through secure telehealth psychiatry appointments.",
          "We help patients manage anxiety, depression, ADHD, bipolar disorder, PTSD, insomnia, and related concerns while accepting Medicaid, Medicare, and major insurance plans used by Maryland residents.",
        ],
      }}
      ctaText="Book Maryland Appointment"
      callHref="tel:+14432956600"
      callText="Call 443-295-6600"
      sectionOne={{
        title: "When Maryland patients reach out for psychiatric support",
        description:
          "Many adults start looking for psychiatric care when symptoms begin affecting work performance, relationships, concentration, sleep, or daily routines. Consistent treatment can make it easier to stabilize symptoms before they become more disruptive.",
        items: [
          "Persistent anxiety, panic, or overthinking that interferes with daily life",
          "Depression, low motivation, or emotional burnout that does not improve",
          "Difficulty focusing, staying organized, or managing ADHD symptoms",
          "Mood swings, irritability, or symptoms that may point to bipolar disorder",
          "Trauma-related symptoms, sleep disruption, or ongoing hypervigilance",
          "Medication concerns or the need for a psychiatric evaluation and treatment plan",
        ],
      }}
      sectionTwo={{
        title: "How Tinka Health Services supports Maryland patients",
        description:
          "Our Maryland psychiatry services are built around timely access, individualized care, and clear follow-up planning so patients can stay engaged with treatment.",
        items: [
          "Comprehensive psychiatric evaluations to clarify symptoms, diagnoses, and next steps",
          "Medication management visits with ongoing monitoring and treatment adjustments",
          "Telehealth appointments that make care easier to access from anywhere in Maryland",
          "Insurance-friendly scheduling with Medicaid, Medicare, and major plans accepted",
          "Personalized treatment plans based on symptoms, health history, and treatment goals",
          "Follow-up support focused on symptom improvement, function, and long-term stability",
        ],
      }}
      structuredData={[
        breadcrumbStructuredData,
        marylandServiceStructuredData,
        marylandWebPageStructuredData,
      ]}
    />
  );
};

export default MarylandPsychiatrist;
