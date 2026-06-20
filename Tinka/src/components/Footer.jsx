import React, { useState, useContext, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import TinkaLogo from "/images/logo/Tinka_health_logo.png";
import { FaInstagram } from "react-icons/fa6";
import servicesDataList from "../pages/services/serviceData";
import { BlogContext } from "../BlogContext/BlogContext";

const emergencyLinks = [
  {
    name: "National Suicide Hotline",
    url: "https://suicidepreventionlifeline.org/",
  },
  {
    name: "The Trevor Project",
    url: "https://www.thetrevorproject.org/",
  },
  {
    name: "National Domestic Violence Hotline",
    url: "https://www.thehotline.org/",
  },
  {
    name: "National Sexual Assault Hotline",
    url: "https://www.rainn.org/",
  },
  {
    name: "Planned Parenthood",
    url: "https://www.plannedparenthood.org/",
  },
  {
    name: "National Alliance on Mental Illness",
    url: "https://www.nami.org/",
  },
];

const companyData = [
  { value: "Insurance We Accept", link: "insurance-we-accept" },
  { value: "Telehealth Psychiatry", link: "telehealth-psychiatry-md-dc-va" },
  { value: "Maryland Psychiatry", link: "maryland-psychiatrist" },
  { value: "DC Psychiatry", link: "dc-psychiatrist" },
  { value: "Virginia Psychiatry", link: "virginia-psychiatrist" },
  { value: "Herndon VA Psychiatry", link: "psychiatric-provider-herndon-va" },
  { value: "Search", link: "search" },
  { value: "Privacy Policy", link: "policy" },
  { value: "Contact Us", link: "contact" },
  { value: "Book Appointment", link: "tinkahealthservicesbooking" },
];

const Footer = () => {
  const { blogs } = useContext(BlogContext);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  // Memoize the sliced data
  const servicesToShow = useMemo(() => servicesDataList.slice(0, 6), []);
  const blogsToShow = useMemo(() => blogs.slice(0, 4), [blogs]);

  return (
    <footer className="bg-[#333743] text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:mr-12">
            <img
              width={32}
              height={32}
              src={TinkaLogo}
              alt="Tinka Health Services Logo"
              className="mb-4 w-32"
              loading="lazy"
            />
            <p>connect with us</p>
            <div className="flex items-center justify-start gap-3">
              <a
                href="https://www.youtube.com/@TinkaHealthServices"
                aria-label="Visit Tinka Health Services on YouTube"
              >
                <TiSocialYoutubeCircular className="text-red-400 w-6 h-6" />
              </a>
              <a
                href="https://x.com/Tinkahealthserv"
                aria-label="Visit Tinka Health Services on X"
              >
                <FaXTwitter className="text-white w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tinkahealthservices/"
                aria-label="Visit Tinka Health Services on Instagram"
              >
                <FaInstagram className="text-red-400 w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-center bg-[#4b4e57] border-2 rounded-lg">
                <p>
                  If you are in a life-threatening situation, don&apos;t use this
                  site. Please visit the sites below:
                </p>
              </div>
              <button
                className="md:hidden mt-4 text-white hover:text-blue-600 flex items-center"
                onClick={() => setIsEmergencyOpen(!isEmergencyOpen)}
              >
                Emergency Links
                {isEmergencyOpen ? <FaAngleUp /> : <FaAngleDown />}
              </button>
              <ul
                className={`mt-4 space-y-2 ${
                  isEmergencyOpen ? "block" : "hidden"
                } md:block`}
              >
                {emergencyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-600"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3
              className="text-xl font-semibold mb-4 cursor-pointer flex items-center justify-between md:justify-start"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <span className="md:hidden">
                {isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </h3>
            <ul
              className={`space-y-2 ${
                isServicesOpen ? "block" : "hidden"
              } md:block`}
            >
              {servicesToShow.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-white hover:text-blue-600 block px-2 py-1 rounded"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  to="/services"
                  className="text-blue-400 hover:text-blue-600 font-semibold block px-2 py-1 rounded border border-blue-400 hover:border-blue-600 text-center"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className="text-xl font-semibold mb-4 cursor-pointer flex items-center justify-between md:justify-start"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              Company
              <span className="md:hidden">
                {isCompanyOpen ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </h3>
            <ul
              className={`space-y-2 ${
                isCompanyOpen ? "block" : "hidden"
              } md:block`}
            >
              {companyData.map((data, index) => (
                <li key={index}>
                  <Link
                    to={`/${data.link}`}
                    className="text-white hover:text-blue-600 block px-2 py-1 rounded"
                  >
                    {data.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className="text-xl font-semibold mb-4 cursor-pointer flex items-center justify-between md:justify-start"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources
              <span className="md:hidden">
                {isResourcesOpen ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </h3>
            <ul
              className={`space-y-2 ${
                isResourcesOpen ? "block" : "hidden"
              } md:block`}
            >
              {blogsToShow.map((blog, index) => (
                <li key={index}>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="text-white hover:text-blue-600 block px-2 py-1 rounded"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  to="/blogs"
                  className="text-blue-400 hover:text-blue-600 font-semibold block px-2 py-1 rounded border border-blue-400 hover:border-blue-600 text-center"
                >
                  View All Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Tinka Health Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
