import React, { Suspense, lazy, memo } from "react";
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

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-32">
    <div className="loader">Loading...</div>
  </div>
);

const Home = () => {
  return (
    <main className="md:pt-24 bg-[#f1f2f6]">
      <div>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <InsuranceLogo />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollAnimationWrapper>
            <Specialization />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollAnimationWrapper>
            <ChooseUs />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollAnimationWrapper>
            <EasyStart />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollAnimationWrapper>
            <Testimonial />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollAnimationWrapper>
            <MentalHealthStats />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollAnimationWrapper>
            <Blogs />
          </ScrollAnimationWrapper>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollAnimationWrapper>
            <FAQs />
          </ScrollAnimationWrapper>
        </Suspense>
      </div>
    </main>
  );
};

export default memo(Home);
