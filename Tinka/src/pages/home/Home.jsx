import React, { Suspense, lazy } from "react";
import Hero from "./Hero";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

// Lazy load the components
const InsuranceLogo = lazy(() => import("./InsuranceLogo"));
const Specialization = lazy(() => import("./Specialization"));
const ChooseUs = lazy(() => import("./ChooseUs"));
const EasyStart = lazy(() => import("./EasyStart"));
const Testimonial = lazy(() => import("./Testimonial"));
const MentalHealthStats = lazy(() => import("./MentalHealthStats"));
const FAQs = lazy(() => import("./Faqs"));
const Blogs = lazy(() => import("./Blogs"));

function Home() {
  return (
    <main className="md:pt-24 bg-[#f1f2f6]">
      <div>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <InsuranceLogo />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollAnimationWrapper>
            <Specialization />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollAnimationWrapper>
            <ChooseUs />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollAnimationWrapper>
            <EasyStart />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollAnimationWrapper>
            <Testimonial />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollAnimationWrapper>
            <MentalHealthStats />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollAnimationWrapper>
            <Blogs />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollAnimationWrapper>
            <FAQs />
          </ScrollAnimationWrapper>
        </Suspense>
      </div>
    </main>
  );
}

export default Home;
