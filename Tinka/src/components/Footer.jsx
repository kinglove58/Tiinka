import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import TinkaLogo from "/images/logo/Tinka_health_logo.png";
import servicesDataList from "../pages/services/serviceData";
import { BlogContext } from "./BlogContext";

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
  { value: "FAQS" },
  { value: "Privacy Policy" },
  { value: "Contact Us" },
];

function Footer() {
  const { blogs, error } = useContext(BlogContext);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  return (
    <footer className="bg-[#333743] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:mr-12">
            <img
              width={32}
              height={32}
              src={TinkaLogo}
              alt="Tinka Health Services Logo"
              className="mb-4 w-32"
            />
            <p>Email us:</p>
            <p>
              <a
                href="mailto:info@tinkahealthservices.com"
                className="text-white hover:text-blue-600"
              >
                info@tinkahealthservices.com
              </a>
            </p>
            <div className="mt-4">
              <div className="flex items-center text-center bg-[#4b4e57] border-2 rounded-lg">
                <p>
                  If you are in a life-threatening situation, don’t use this
                  site. Please visit the sites below:
                </p>
              </div>
              <button
                className="md:hidden mt-4 text-white hover:text-blue-600 flex items-center"
                onClick={() => setIsEmergencyOpen(!isEmergencyOpen)}
              >
                Emergency Links{" "}
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
              className="text-xl font-semibold mb-4 md:cursor-pointer flex items-center justify-between md:justify-start"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services{" "}
              <span className="md:hidden">
                {isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </h3>
            <ul
              className={`space-y-2 ${
                isServicesOpen ? "block" : "hidden"
              } md:block`}
            >
              {servicesDataList.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-white hover:text-blue-600 block px-2 py-1 rounded"
                  >
                    {service.id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className="text-xl font-semibold mb-4 md:cursor-pointer flex items-center justify-between md:justify-start"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              Company{" "}
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
                    to={`/${data.value}`}
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
              className="text-xl font-semibold mb-4 md:cursor-pointer flex items-center justify-between md:justify-start"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources{" "}
              <span className="md:hidden">
                {isResourcesOpen ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </h3>
            <ul
              className={`space-y-2 ${
                isResourcesOpen ? "block" : "hidden"
              } md:block`}
            >
              {blogs.slice(0, 7).map((blog, index) => (
                <li key={index}>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-white hover:text-blue-600 block px-2 py-1 rounded"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
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
}

export default Footer;
