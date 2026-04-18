import { lazy, Suspense, memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TeletherapyImg from "/images/img_mental_health/hero/teletherapyimg.webp";
import BookingLink from "../../components/BookingLink";

const CallVideoAction = lazy(() => import("../../components/CallVideoAction"));

const Hero = () => {
  const [showCallVideoAction, setShowCallVideoAction] = useState(false);
  const callVideoActionRef = useRef(null);

  useEffect(() => {
    const node = callVideoActionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShowCallVideoAction(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowCallVideoAction(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const LoadingFallback = () => (
    <div className="flex justify-center items-center py-4" aria-hidden="true">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-700" />
    </div>
  );

  return (
    <div className="mb-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:text-start text-center items-center justify-between px-4 md:px-12 lg:px-24 py-8 pt-12">
        {/* Left Side */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:mb-0 mb-12">
          <h1 className="text-2xl md:text-4xl md:max-w-xl font-semibold text-gray-700 mb-4">
            <span className="text-[#005ab0]">
              Psychiatric Provider in Maryland, Washington DC and Virginia
            </span>
            <br />
            Accepting Medicaid, Medicare and Major Insurance
          </h1>
          <p className="text-gray-700 md:mb-2 mb-1 text-lg md:max-w-xl">
            Now accepting Medicaid, Medicare and Kaiser (DC) with telehealth
            psychiatry appointments across MD, DC and VA.
          </p>
          <p className="text-blue-700 md:mb-5 mb-2 text-lg md:max-w-xl">
            Accepting new patients with same week appointments available when
            possible.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
            <BookingLink> Book an Appointment</BookingLink>
            <Link
              to="/meet-our-provider"
              className="inline-block border-2 border-[#005ab0] text-[#005ab0] px-6 py-3 rounded-lg font-semibold hover:bg-[#005ab0] hover:text-white transition duration-300"
            >
              Meet Our Provider
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={TeletherapyImg}
            alt="A person listening to counselling"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 600px) 400px, 800px"
            width={400}
            height={300}
            className="w-full max-w-[800px] h-auto"
          />
        </div>
      </div>

      {/* Use the extracted component */}

      {/* <BookingModal show={showIframe} onClose={() => setShowIframe(false)} /> */}

      {/* Call to Action */}
      <div ref={callVideoActionRef} className="min-h-[100px]">
        {showCallVideoAction ? (
          <Suspense fallback={<LoadingFallback />}>
            <CallVideoAction />
          </Suspense>
        ) : null}
      </div>
    </div>
  );
};

export default memo(Hero);
