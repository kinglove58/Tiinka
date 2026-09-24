import React from "react";
import ServiceStylePage from "../shared/ServiceStylePage";

const DCPsychiatrist = () => {
  const canonicalUrl = "https://tinkahealthservices.com/dc-psychiatrist";
  const metaTitle =
    "Psychiatric Provider in Washington DC | Tinka Health";
  const metaDescription =
    "Find Washington DC psychiatric care for anxiety, depression, ADHD, PTSD, and medication management with telehealth and insurance access.";

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
        name: "Washington DC Psychiatrist",
        item: canonicalUrl,
      },
    ],
  };

  const dcServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${canonicalUrl}#clinic`,
    name: "Tinka Health Services - Washington DC Psychiatry",
    url: canonicalUrl,
    description: metaDescription,
    image: "https://tinkahealthservices.com/images/services/Mental_Health.jpg",
    telephone: "+1 202-933-4300",
    medicalSpecialty: "Psychiatry",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Washington DC",
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
      telephone: "+1 202-933-4300",
    },
  };

  const dcWebPageStructuredData = {
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
      currentPath="/dc-psychiatrist"
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      keywords={[
        "psychiatric provider in washington dc",
        "dc medicaid psychiatrist",
        "kaiser psychiatrist dc",
        "telehealth psychiatry dc",
        "amerihealth caritas dc mental health provider",
        "medication management washington dc",
      ]}
      heroTitle="Psychiatric Provider in Washington DC"
      heroSubtitle="Telehealth psychiatry in DC with insurance-friendly access"
      intro={{
        title: "Psychiatric care for adults throughout Washington DC",
        description: [
          "Tinka Health Services provides psychiatric evaluations, medication management, and follow-up treatment for adults living in Washington DC through secure telehealth appointments.",
          "We support patients with anxiety, depression, ADHD, PTSD, bipolar disorder, and mood concerns while accepting DC Medicaid, Kaiser Permanente DC, AmeriHealth Caritas DC, CareFirst, and other major insurance plans.",
        ],
      }}
      ctaText="Book DC Appointment"
      callHref="tel:+12029334300"
      callText="Call 202-933-4300"
      sectionOne={{
        title:
          "Mental health concerns Washington DC patients commonly bring to care",
        description:
          "Adults in DC often seek psychiatric treatment when symptoms begin to interfere with high-pressure schedules, emotional regulation, focus, sleep, or relationships. Early treatment can make symptoms more manageable and improve day-to-day function.",
        items: [
          "Anxiety, panic, or chronic stress that impacts work, school, or home life",
          "Depression, hopelessness, or fatigue that makes it harder to stay engaged",
          "ADHD symptoms that interfere with focus, planning, and productivity",
          "PTSD symptoms, intrusive thoughts, or trauma-related sleep disruption",
          "Mood instability, irritability, or concerns that may require psychiatric evaluation",
          "The need for medication review, follow-up, or a more structured treatment plan",
        ],
      }}
      sectionTwo={{
        title: "Why patients in Washington DC choose Tinka Health Services",
        description:
          "Our DC psychiatry services are designed to help patients start treatment clearly, verify insurance early, and continue care through a flexible telehealth model.",
        items: [
          "Comprehensive psychiatric evaluations focused on diagnosis, symptoms, and treatment planning",
          "Medication management for adults dealing with anxiety, mood, attention, and trauma-related symptoms",
          "Telehealth visits that fit the pace of life in Washington DC without adding commute time",
          "Insurance access that includes DC Medicaid, Kaiser Permanente DC, and other major plans",
          "Follow-up appointments to monitor progress, medication response, and needed changes",
          "A practical, patient-centered approach that helps move treatment forward with less friction",
        ],
      }}
      structuredData={[
        breadcrumbStructuredData,
        dcServiceStructuredData,
        dcWebPageStructuredData,
      ]}
    />
  );
};

export default DCPsychiatrist;
