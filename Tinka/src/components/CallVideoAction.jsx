import { lazy, Suspense, memo } from "react";

const YouTubeThumbnail = lazy(() => import("./YouTubeThumbnail"));

const LoadingFallback = () => (
  <div className="flex justify-center items-center">
    <div className="loader">Loading...</div>
  </div>
);

const CallVideoAction = () => {
  return (
    <section className="bg-[#005ab0] px-4 py-10 text-white md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Compassionate Mental Health Care, Centered Around You.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-blue-50 md:text-lg md:leading-8">
            <p>
              At Tinka Health Services, we understand that reaching out for
              mental health support can be a difficult and deeply personal
              decision. You may be feeling overwhelmed, anxious, depressed,
              exhausted, or simply unsure of what to do next. Whatever brings
              you to us, you deserve a space where you feel heard, respected,
              and supported.
            </p>
            <p>
              Our goal is to meet you where you are and work with you toward
              where you want to be. We provide compassionate, personalized
              mental health care for children, adolescents, and adults
              experiencing a variety of emotional, behavioral, and psychiatric
              concerns. Through comprehensive psychiatric evaluations,
              medication management, ADHD assessment and treatment, substance
              use treatment, and ongoing support, we create an individualized
              treatment plan centered around your needs and goals.
            </p>
            <p>
              At Tinka Health Services, we are here to listen, understand your
              concerns, and help you take meaningful steps toward feeling better
              and improving your quality of life. Your mental health matters,
              and we are honored to be part of your journey toward greater
              stability, confidence, and well-being.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          {/* Video indicator overlay */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center gap-2">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Video
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <YouTubeThumbnail videoId="dXdKybDCASM" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default memo(CallVideoAction);
