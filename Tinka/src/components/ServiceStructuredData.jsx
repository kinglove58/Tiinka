import React from "react";
import { Helmet } from "react-helmet";

const ServiceStructuredData = ({ service }) => {
  if (!service) return null;

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.name,
    description: service.title1Des || service.id_sub,
    url: `https://tinkahealthservices.com/services/${service.id}`,
    provider: {
      "@type": "MedicalOrganization",
      name: "Tinka Health Services",
      url: "https://tinkahealthservices.com",
      logo: "https://tinkahealthservices.com/images/logo/Tinka_health_logo.png",
      telephone: "+1 443-295-6600",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5457 Twin Knolls Road, Suite 300",
        addressLocality: "Columbia",
        addressRegion: "MD",
        postalCode: "21045",
        addressCountry: "US",
      },
      areaServed: [
        {
          "@type": "State",
          name: "Virginia",
        },
        {
          "@type": "State",
          name: "Washington DC",
        },
        {
          "@type": "State",
          name: "Maryland",
        },
      ],
    },
    medicalSpecialty: "Psychiatry",
    availableService: {
      "@type": "MedicalService",
      name: service.name,
      description: service.title1Des || service.id_sub,
      serviceType: "Mental Health Treatment",
    },
  };

  // Add breadcrumb structured data
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
        name: "Services",
        item: "https://tinkahealthservices.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `https://tinkahealthservices.com/services/${service.id}`,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

export default ServiceStructuredData;
