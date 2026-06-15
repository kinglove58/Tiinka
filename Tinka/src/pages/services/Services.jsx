import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import serviceData from "./serviceData";
import ServiceGrid from "../../components/ServiceGrid";

function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);
  const servicesPerPage = 6;

  // Statistics data
  const statsData = [
    {
      number: `${serviceData.length}+`,
      label: "Specialized Services",
      borderColor: "border-blue-600",
      textColor: "text-blue-800",
    },
    {
      number: "100%",
      label: "Evidence-Based Care",
      borderColor: "border-green-600",
      textColor: "text-green-800",
    },
    {
      number: "24/7",
      label: "Support Available",
      borderColor: "border-purple-600",
      textColor: "text-purple-800",
    },
  ];

  // Auto-advance carousel on mobile (every 4 seconds)
  useEffect(() => {
    if (!isAutoAdvancing) return;

    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % statsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoAdvancing, statsData.length]);

  // Filter services based on search term
  const filteredServices = serviceData.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.id_sub.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.title1Des.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate pagination for filtered results
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  // Reset to page 1 when search changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to services section when page changes
    document.querySelector("#services-section").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Stats carousel handlers
  const nextStat = () => {
    setIsAutoAdvancing(false);
    setCurrentStatIndex((prev) => (prev + 1) % statsData.length);
    // Resume auto-advance after 8 seconds of no interaction
    setTimeout(() => setIsAutoAdvancing(true), 8000);
  };

  const prevStat = () => {
    setIsAutoAdvancing(false);
    setCurrentStatIndex(
      (prev) => (prev - 1 + statsData.length) % statsData.length,
    );
    setTimeout(() => setIsAutoAdvancing(true), 8000);
  };

  const goToStat = (index) => {
    setIsAutoAdvancing(false);
    setCurrentStatIndex(index);
    setTimeout(() => setIsAutoAdvancing(true), 8000);
  };

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      setIsAutoAdvancing(false);
      if (isLeftSwipe) {
        setCurrentStatIndex((prev) => (prev + 1) % statsData.length);
      } else {
        setCurrentStatIndex(
          (prev) => (prev - 1 + statsData.length) % statsData.length,
        );
      }
      setTimeout(() => setIsAutoAdvancing(true), 8000);
    }
  };
  return (
    <div className="pt-20">
      <Helmet>
        <title>
          Mental Health Services in MD, DC and VA | Tinka Health Services
        </title>
        <meta
          name="description"
          content="Explore medication management, therapy support, telehealth psychiatry, and care for anxiety, depression, ADHD, PTSD, and more."
        />
        <meta
          name="keywords"
          content="mental health services maryland, mental health services washington dc, mental health services virginia, medication management services, telehealth psychiatry appointments, psychiatric provider near me"
        />
        <link rel="canonical" href="https://tinkahealthservices.com/services" />
        <meta
          property="og:title"
          content="Mental Health Services in MD, DC and VA | Tinka Health Services"
        />
        <meta
          property="og:description"
          content="Find psychiatric and therapy services with telehealth, in-person options, and insurance-friendly access."
        />
        <meta
          property="og:url"
          content="https://tinkahealthservices.com/services"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Mental Health Services",
            itemListElement: serviceData.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.name,
                url: `https://tinkahealthservices.com/services/${service.id}`,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <ScrollAnimationWrapper>
        <div
          className="min-h-[40vh] bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.8), rgba(29, 78, 216, 0.8)), url('/images/services/therapy (3).jpg')",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Services Grid Section */}
      <ScrollAnimationWrapper>
        <div id="services-section" className="px-4 md:px-16 py-16 bg-gray-50">
          {/* Services Stats */}
          <div className="max-w-4xl mx-auto mb-16">
            {/* Desktop View - Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8 text-center">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 shadow-md border-t-4 ${stat.borderColor}`}
                >
                  <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile View - Carousel */}
            <div className="md:hidden">
              <div className="relative">
                {/* Carousel Container */}
                <div
                  className="overflow-hidden rounded-lg carousel-container"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <div
                    className="flex transition-transform duration-300 ease-in-out stats-carousel"
                    style={{
                      transform: `translateX(-${currentStatIndex * 100}%)`,
                    }}
                  >
                    {statsData.map((stat, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 px-4 carousel-slide"
                      >
                        <div
                          className={`bg-white rounded-lg p-8 shadow-md border-t-4 ${stat.borderColor} text-center`}
                        >
                          <div
                            className={`text-4xl font-bold ${stat.textColor} mb-3`}
                          >
                            {stat.number}
                          </div>
                          <div className="text-gray-600 text-lg">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevStat}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Previous statistic"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextStat}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Next statistic"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {/* Dot Indicators */}
                  {statsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToStat(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentStatIndex
                          ? "bg-blue-600"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to statistic ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Our Comprehensive Mental Health Services
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              We provide specialized care across various mental health
              disciplines, combining expertise with empathy to help you achieve
              lasting wellness and personal fulfillment.
            </p>
            <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              Serving Maryland, Washington DC, and Virginia with telehealth and
              in-person options. Accepting new patients with same week
              appointments available when possible.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 pl-12 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <p className="text-lg text-blue-600 font-medium">
              {searchTerm ? (
                <>
                  Found {filteredServices.length} service
                  {filteredServices.length !== 1 ? "s" : ""}
                  {filteredServices.length > 0 && (
                    <>
                      {" "}
                      - Showing {startIndex + 1}-
                      {Math.min(endIndex, filteredServices.length)}
                    </>
                  )}
                </>
              ) : (
                <>
                  Showing {startIndex + 1}-
                  {Math.min(endIndex, filteredServices.length)} of{" "}
                  {filteredServices.length} services
                </>
              )}
            </p>
          </div>

          {/* Service Grid Component - All services in button format */}
          <ServiceGrid />

          {/* Services Grid */}
          {currentServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {currentServices.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full border-l-4 border-blue-600 group-hover:border-blue-800">
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl font-bold text-blue-800 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                        {service.id_sub}
                      </p>
                      <div className="mb-6">
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                          {service.title1Des}
                        </p>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors duration-300 font-medium">
                        <span>Learn More</span>
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* No Results Found */
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <svg
                  className="w-16 h-16 text-gray-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-600 mb-4">
                  No services found
                </h3>
                <p className="text-gray-500 mb-6">
                  We couldn't find any services matching "{searchTerm}". Try
                  adjusting your search term or browse all our services.
                </p>
                <button
                  onClick={clearSearch}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  View All Services
                </button>
              </div>
            </div>
          )}

          {/* Pagination Controls */}
          {currentServices.length > 0 && totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
              {/* Page Info */}
              <div className="text-gray-600">
                Page {currentPage} of {totalPages}
              </div>

              {/* Pagination Buttons */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md"
                  }`}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex gap-1">
                  {totalPages <= 5 ? (
                    // Show all pages if 5 or fewer
                    [...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                            currentPage === pageNumber
                              ? "bg-blue-600 text-white shadow-md"
                              : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })
                  ) : (
                    // Show condensed pagination for more than 5 pages
                    <>
                      {/* First page */}
                      <button
                        onClick={() => handlePageChange(1)}
                        className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                          currentPage === 1
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        1
                      </button>

                      {/* Ellipsis if needed */}
                      {currentPage > 3 && (
                        <span className="w-10 h-10 flex items-center justify-center text-gray-500">
                          ...
                        </span>
                      )}

                      {/* Current page and adjacent pages */}
                      {[...Array(3)].map((_, index) => {
                        const pageNumber = Math.max(
                          2,
                          Math.min(totalPages - 1, currentPage - 1 + index),
                        );
                        if (pageNumber === 1 || pageNumber === totalPages)
                          return null;

                        return (
                          <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                              currentPage === pageNumber
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                            }`}
                          >
                            {pageNumber}
                          </button>
                        );
                      })}

                      {/* Ellipsis if needed */}
                      {currentPage < totalPages - 2 && (
                        <span className="w-10 h-10 flex items-center justify-center text-gray-500">
                          ...
                        </span>
                      )}

                      {/* Last page */}
                      {totalPages > 1 && (
                        <button
                          onClick={() => handlePageChange(totalPages)}
                          className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                            currentPage === totalPages
                              ? "bg-blue-600 text-white shadow-md"
                              : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          {totalPages}
                        </button>
                      )}
                    </>
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md"
                  }`}
                >
                  Next
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Go to Top Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                ↑ Top
              </button>
            </div>
          )}
        </div>
      </ScrollAnimationWrapper>

      {/* Call to Action Section */}
      <ScrollAnimationWrapper>
        <div className="px-4 md:px-16 py-16 bg-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Take the first step towards better mental health today. Our
              compassionate team is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg"
              >
                Contact Us Today
              </Link>
              <Link
                to="/booking"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg border-2 border-blue-600 hover:border-blue-700"
              >
                Schedule Appointment
              </Link>
            </div>
            <p className="text-sm text-blue-100 mt-4">
              Accepting new patients with same week appointments when available.
              We accept Medicaid, Medicare, and major insurance plans.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <Link
                to="/insurance-we-accept"
                className="bg-white/10 border border-blue-200 text-white px-3 py-2 rounded-lg text-sm font-semibold"
              >
                Insurance We Accept
              </Link>
              <Link
                to="/telehealth-psychiatry-md-dc-va"
                className="bg-white/10 border border-blue-200 text-white px-3 py-2 rounded-lg text-sm font-semibold"
              >
                Telehealth Psychiatry
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Additional Information Section */}
      <ScrollAnimationWrapper>
        <div className="px-4 md:px-16 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-blue-800 mb-6">
                  Why Choose Tinka Health Services?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Expert Care Team
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our licensed professionals bring years of experience and
                        specialized training to provide the highest quality
                        care.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Personalized Treatment
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Every treatment plan is tailored to your unique needs,
                        goals, and circumstances for optimal outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Convenient Access
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Flexible scheduling and telehealth options make it easy
                        to access care when and where you need it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-first">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">
                      Compassionate Care
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We believe in creating a safe, supportive environment
                      where healing can begin and flourish.
                    </p>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      24+
                    </div>
                    <p className="text-sm text-gray-600">
                      Specialized Services Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}

export default Services;
