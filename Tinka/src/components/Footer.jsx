import React, { useState } from "react";
import { Link } from "react-router-dom";
import TinkaLogo from "../assets/images/logo/Tinka-Health-Services-logo.png";
import servicesDataList from "../pages/services/serviceData";

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:mr-12">
            <img
              src={TinkaLogo}
              alt="Tinka Health Services Logo"
              className="mb-4 w-32"
            />
            <p>Email us:</p>
            <p>
              <a
                href="mailto:info@tinkahealthservices.com"
                className="text-blue-400 hover:underline"
              >
                info@tinkahealthservices.com
              </a>
            </p>
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <p>
                  If you are in a life-threatening situation, don’t use this
                  site. Please visit the sites below:
                </p>
              </div>
              <button
                className="md:hidden text-blue-400 hover:underline"
                onClick={() => setIsEmergencyOpen(!isEmergencyOpen)}
              >
                Emergency Links
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
                      className="text-blue-400 hover:underline"
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
              className="text-xl font-semibold mb-4 md:cursor-pointer"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
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
                    className="text-blue-400 hover:underline"
                  >
                    {service.id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className="text-xl font-semibold mb-4 md:cursor-pointer"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              Company
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
                    className="text-blue-400 hover:underline"
                  >
                    {data.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className="text-xl font-semibold mb-4 md:cursor-pointer"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources
            </h3>
            <ul
              className={`space-y-2 ${
                isResourcesOpen ? "block" : "hidden"
              } md:block`}
            >
              <li>
                <Link to="/blogs" className="text-blue-400 hover:underline">
                  Blogs
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
}

export default Footer;
