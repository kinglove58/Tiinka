import { Link, useParams } from "react-router-dom";
import service_data from "../services/serviceData";
import { useEffect, useRef, useState } from "react";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import { Helmet } from "react-helmet";
import BookingModal from "../../components/BookingModal";
import ServiceStructuredData from "../../components/ServiceStructuredData";

function SingleService() {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const service = service_data.find((data) => data.id === id);

  const hrRef = useRef(null);
  const secondDivRef = useRef(null);

  useEffect(() => {
    if (hrRef.current && secondDivRef.current) {
      hrRef.current.style.height = `${secondDivRef.current.offsetHeight}px`;
    }
  }, [secondDivRef]);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="pt-20">
      <ServiceStructuredData service={service} />
      <Helmet>
        <title>{service.title1} - Tinka Health Services</title>
        <meta name="description" content={service.title1Des} />
        {service.keywords && (
          <meta name="keywords" content={service.keywords.join(", ")} />
        )}
        <link
          rel="canonical"
          href={`https://tinkahealthservices.com/services/${id}`}
        />
      </Helmet>
      <ScrollAnimationWrapper>
        <div
          className="min-h-[50vh] bg-blue-800 px-4 py-6 md:px-16 flex flex-col justify-center space-y-7 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: service.image
              ? `linear-gradient(rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.8)), url('${service.image}')`
              : "none",
          }}
        >
          {service.image && (
            <img
              src={service.image}
              alt={
                service.imageAlt ||
                `${service.name} - Mental health treatment services`
              }
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-0"
              loading="lazy"
            />
          )}
          <h1 className="text-6xl font-bold text-white relative z-10">
            {service.name}
          </h1>
          <p className="text-xl font-semibold text-white relative z-10">
            {service.id_sub}
          </p>
        </div>
        <div className="px-4 md:px-16 py-16 flex flex-col lg:flex-row items-start gap-10 justify-between min-h-full">
          <div className="w-full lg:w-[70%]">
            <div className="">
              <h2 className="capitalize text-4xl font-bold text-blue-800 mb-10">
                {service.title1}
              </h2>
              <p className="text-gray-700 font-semibold text-2xl mb-10">
                {service.title1Des}
              </p>
              {/* ✅ Button to open modal */}
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {service.btnText}
              </button>

              {/* ✅ Modal component */}
              <BookingModal
                show={showModal}
                onClose={() => setShowModal(false)}
              />
            </div>
            <div className="mt-16">
              <h3 className="font-bold text-2xl text-blue-800 mb-8">
                {service.title2}
              </h3>
              <p className="mb-10 text-xl text-gray-700 font-semibold">
                {service.title2Des}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-4">
                {service.title2List.map((item) => (
                  <div key={item} className="flex items-start gap-4 w-[80%]">
                    <div className="w-2 h-2 rounded-full bg-blue-800 mt-2"></div>
                    <li className="list-none w-[90%] text-lg text-gray-700 font-semibold">
                      {item}
                    </li>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16">
              <h3 className="font-bold text-2xl text-blue-800 mb-8">
                {service.title3}
              </h3>
              <p className="mb-10 text-xl text-gray-700 font-semibold">
                {service.title3Des}
              </p>
              <div className="flex flex-col gap-4">
                {service.title3List.map((item) => (
                  <div key={item} className="flex items-start gap-4 w-[80%]">
                    <div className="w-2 h-2 rounded-full bg-blue-800 mt-2"></div>
                    <li className="list-none w-[90%] text-lg text-gray-700 font-semibold">
                      {item}
                    </li>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[20%] h-full flex items-start gap-12">
            <hr
              ref={hrRef}
              className="hidden lg:block w-1 bg-gray-400 h-full"
            />
            <div ref={secondDivRef} className="h-full w-full">
              <h2 className="font-bold text-blue-800 text-2xl mb-4">
                Our Services
              </h2>
              <div className="space-y-2">
                {service_data.slice(0, 8).map((data) => (
                  <div key={data.id} className="group">
                    <Link
                      to={`/services/${data.id}`}
                      className={`block w-full px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${
                        data.id === service.id
                          ? "bg-blue-100 border-2 border-blue-600 text-blue-800 shadow-md"
                          : "hover:bg-gray-100 hover:border-2 hover:border-gray-300 hover:shadow-sm border-2 border-transparent"
                      }`}
                    >
                      <p
                        className={`font-semibold transition-colors duration-300 ${
                          data.id === service.id
                            ? "text-blue-800"
                            : "text-gray-700 group-hover:text-blue-700"
                        }`}
                      >
                        {data.name}
                      </p>
                    </Link>
                  </div>
                ))}
                <div className="mt-4">
                  <Link
                    to="/services"
                    className="block w-full px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}

export default SingleService;
