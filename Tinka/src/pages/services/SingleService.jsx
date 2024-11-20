import { Link, useParams } from "react-router-dom";
import service_data from "../services/serviceData";
import { useEffect, useRef } from "react";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import { Helmet } from "react-helmet";

function SingleService() {
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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "${service.title1}",
              "description": "${service.title1Des}",
              "provider": {
                "@type": "Organization",
                "name": "Tinka Health Services",
                "url": "https://tinkahealthservices.com",
                "logo": "https://tinkahealthservices.com/logo.png"
              },
              "serviceType": "${service.serviceType}",
              "url": "https://tinkahealthservices.com/services/${id}"
            }
          `}
        </script>
      </Helmet>
      <ScrollAnimationWrapper>
        <div className="min-h-[50vh] bg-blue-800 px-4 py-6 md:px-16 flex flex-col justify-center space-y-7">
          <h1 className="text-6xl font-bold text-white">{service.id}</h1>
          <p className="text-xl font-semibold text-white">{service.id_sub}</p>
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
              <button className="px-6 bg-blue-800 text-white h-[50px] rounded-md hover:bg-blue-700 transition duration-500">
                {service.btnText}
              </button>
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
                {service_data.map((data) => (
                  <p
                    key={data.id}
                    className={`flex text-gray-700 font-semibold ${
                      data.id === service.id && "text-blue-800"
                    } hover:text-blue-800`}
                  >
                    <Link className="w-full h-full" to={`/services/${data.id}`}>
                      {data.id}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}

export default SingleService;
