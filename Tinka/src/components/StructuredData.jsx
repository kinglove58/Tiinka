import React from "react";
import { Helmet } from "react-helmet";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://tinkahealthservices.com/#organization",
        name: "Tinka Health Services",
        alternateName: "Tinka Health",
        url: "https://tinkahealthservices.com",
        logo: {
          "@type": "ImageObject",
          url: "https://tinkahealthservices.com/Tinka_health_logo.png",
          width: 600,
          height: 200,
        },
        image: {
          "@type": "ImageObject",
          url: "https://tinkahealthservices.com/Tinka_health_logo.png",
        },
        description:
          "Tinka Health Services provides comprehensive mental health care including therapy, psychiatric consultations, medication management, and wellness support in Virginia and Maryland.",
        foundingDate: "2020",
        email: "info@tinkahealthservices.com",
        telephone: "+1 443-295-6600", // Replace with actual phone number
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "5457 Twin Knolls Road, Suite 300",
            addressLocality: "Columbia",
            addressRegion: "MD",
            postalCode: "21045",
            addressCountry: "US",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "4315 50th Street NW, Suite 100",
            addressLocality: "Washington",
            addressRegion: "DC",
            postalCode: "20016",
            addressCountry: "US",
          },
        ],
        areaServed: [
          {
            "@type": "State",
            name: "Virginia",
          },
          {
            "@type": "State",
            name: "Maryland",
          },
        ],
        openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00", "Su 10:00-15:00"],
        sameAs: [
          "https://www.facebook.com/tinkahealthservices",
          "https://www.instagram.com/tinkahealthservices/",
          "https://x.com/Tinkahealthserv",
          "https://www.youtube.com/@TinkaHealthServices",
        ],
        medicalSpecialty: ["Psychiatry", "Psychology", "Mental Health"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Mental Health Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTherapy",
                name: "Individual Therapy",
                description:
                  "Personalized therapy sessions to help you grow into your best, authentic self",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTherapy",
                name: "Insomnia Therapy",
                description:
                  "Find restful sleep and peace of mind with specialized insomnia treatment",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTherapy",
                name: "Anxiety Disorder Treatment",
                description:
                  "Overcome fears and regain control with anxiety management therapy",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTherapy",
                name: "Depression Treatment",
                description:
                  "Rediscover hope and resilience through comprehensive depression therapy",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTherapy",
                name: "Bipolar Disorder Management",
                description:
                  "Manage mood swings and live with stability through specialized care",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTherapy",
                name: "Children's Therapy",
                description:
                  "Support and guidance for young minds through play therapy and talk therapy",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTherapy",
                name: "Grief and Trauma Counseling",
                description:
                  "Process grief and trauma with compassionate professional support",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTherapy",
                name: "Eating Disorder Treatment",
                description:
                  "Nurture a healthy relationship with food and yourself",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTherapy",
                name: "Stress and Burnout Management",
                description: "Reclaim balance and well-being in work and life",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalService",
                name: "Medication Management",
                description:
                  "Professional psychiatric medication management and monitoring",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalService",
                name: "Teletherapy Services",
                description:
                  "Virtual mental health services accessible from anywhere",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://tinkahealthservices.com/#website",
        url: "https://tinkahealthservices.com",
        name: "Tinka Health Services",
        description:
          "Mental health care solutions in Virginia and Maryland. Reclaim your hope and revive your stability.",
        publisher: {
          "@id": "https://tinkahealthservices.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://tinkahealthservices.com/blogs?search={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://tinkahealthservices.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is included in medication management?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our practice offers medication management services to support your mental health journey, including prescription monitoring, dosage adjustments, and regular consultations with our psychiatric professionals.",
            },
          },
          {
            "@type": "Question",
            name: "Who do you provide treatment for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide treatment to clients aged 12 and older who are located in Maryland and Virginia. Our services include individual therapy, children's therapy, and specialized mental health treatments.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide crisis management services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, we do not provide crisis management services. In an emergency, please dial 911 or visit the nearest emergency department. For mental health crisis support, contact the National Suicide Prevention Lifeline at 988.",
            },
          },
          {
            "@type": "Question",
            name: "What is the cancellation or no-show policy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cancellations or rescheduling requests must be made at least 24 hours in advance. A $100/$150 fee applies for late cancellations or no-shows to ensure we can serve all our clients effectively.",
            },
          },
          {
            "@type": "Question",
            name: "How does teletherapy work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our teletherapy services allow you to receive professional mental health care from the comfort of your home. Sessions are conducted through secure, HIPAA-compliant video platforms, making therapy more accessible and convenient.",
            },
          },
          {
            "@type": "Question",
            name: "What mental health conditions do you treat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We treat a wide range of mental health conditions including depression, anxiety disorders, bipolar disorder, PTSD, ADHD, eating disorders, grief and trauma, stress and burnout, personality disorders, and dissociative disorders.",
            },
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://tinkahealthservices.com/#localbusiness",
        name: "Tinka Health Services",
        image: "https://tinkahealthservices.com/logo.png",
        telephone: "+1 443-295-6600", // Replace with actual phone number
        address: {
          "@type": "PostalAddress",
          streetAddress: "5457 Twin Knolls Road, Suite 300",
          addressLocality: "Columbia",
          addressRegion: "MD",
          postalCode: "21045",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 39.2037, // Replace with actual coordinates
          longitude: -76.8618, // Replace with actual coordinates
        },
        url: "https://tinkahealthservices.com",
        sameAs: [
          "https://www.facebook.com/tinkahealthservices",
          "https://www.instagram.com/tinkahealthservices/",
          "https://x.com/Tinkahealthserv",
          "https://www.youtube.com/@TinkaHealthServices",
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "16:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "10:00",
            closes: "15:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "125",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Service",
        "@id": "https://tinkahealthservices.com/#service",
        serviceType: "Mental Health Care",
        provider: {
          "@id": "https://tinkahealthservices.com/#organization",
        },
        areaServed: [
          {
            "@type": "State",
            name: "Virginia",
          },
          {
            "@type": "State",
            name: "Maryland",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Mental Health Services",
          itemListElement: [
            {
              "@type": "Service",
              name: "Therapy Sessions",
              description:
                "Individual and group therapy sessions for various mental health conditions",
            },
            {
              "@type": "Service",
              name: "Psychiatric Consultations",
              description:
                "Professional psychiatric evaluations and ongoing care",
            },
            {
              "@type": "Service",
              name: "Medication Management",
              description:
                "Expert management and monitoring of psychiatric medications",
            },
            {
              "@type": "Service",
              name: "Teletherapy",
              description:
                "Virtual mental health services for convenient access to care",
            },
          ],
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
