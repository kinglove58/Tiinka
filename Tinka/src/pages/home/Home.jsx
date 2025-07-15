import React, { Suspense, lazy, memo } from "react";
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import Locations from "./Locations"; // Import the new Locations component
import MentalDetails from "../../components/MentalDetails";

// Lazy load the components
const InsuranceLogo = lazy(() => import("./InsuranceLogo"));
const Specialization = lazy(() => import("./Specialization"));
const ChooseUs = lazy(() => import("./ChooseUs"));
const EasyStart = lazy(() => import("./EasyStart"));
const Testimonial = lazy(() => import("./Testimonial"));
const MentalHealthStats = lazy(() => import("./MentalHealthStats"));
const FAQs = lazy(() => import("./Faqs"));
const Blogs = lazy(() => import("./Blogs"));

const Home = () => {
  return (
    <main className="md:pt-24 bg-[#f1f2f6]">
      <Helmet>
        <title>Home - Tinka Health Services</title>
        <meta
          name="description"
          content="Welcome to Tinka Health Services. We provide the best health services."
        />
        <meta
          name="keywords"
          content="health, services, Tinka, insurance, mental health"
        />
        <link rel="canonical" href="https://tinkahealthservices.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tinka Health Services",
              "url": "https://tinkahealthservices.com",
              "logo": "https://tinkahealthservices.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/tinkahealthservices",
                "https://www.twitter.com/tinkahealthservices",
                "https://www.instagram.com/tinkahealthservices"
              ]
            }
          `}
        </script>
      </Helmet>
      <div>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <MentalDetails />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Locations />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <InsuranceLogo />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Specialization />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ChooseUs />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <EasyStart />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonial />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <MentalHealthStats />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <FAQs />
        </Suspense>
      </div>
    </main>
  );
};

export default memo(Home);
