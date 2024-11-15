import React, { Suspense, lazy, memo } from "react";
import Hero from "./Hero";
import { PuffLoader } from "react-spinners";

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
      <div>
        <Hero />
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
          <Blogs />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <FAQs />
        </Suspense>
      </div>
    </main>
  );
};

export default memo(Home);
