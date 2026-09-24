import { useState, useContext, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import TinkaLogo from "/images/logo/Tinka_health_logo.png";
import { FaInstagram } from "react-icons/fa6";
import servicesDataList from "../pages/services/serviceData";
import { BlogContext } from "../BlogContext/BlogContext";
import {
  getConditionHubPath,
  getConditionHubs,
} from "../pages/conditions/conditionHubData";

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

const companyLinks = [
  { value: "About Us", link: "/about" },
  { value: "Meet Our Provider", link: "/meet-our-provider" },
  { value: "Contact Us", link: "/contact" },
  { value: "Refer a Patient", link: "/referral" },
  { value: "Book Appointment", link: "/booking" },
  { value: "Patient Portal", href: "https://portal.kareo.com/pp-webapp/app/new/login" },
];

const careLinks = [
  { value: "All Services", link: "/services" },
  { value: "Weight Loss Management", link: "/weight-loss-management" },
  { value: "Primary & Preventive Care", link: "/primary-preventive-care" },
  { value: "Insurance We Accept", link: "/insurance-we-accept" },
  { value: "Telehealth Psychiatry", link: "/telehealth-psychiatry-md-dc-va" },
];

const locationLinks = [
  { value: "Maryland Psychiatry", link: "/maryland-psychiatrist" },
  { value: "Washington DC Psychiatry", link: "/dc-psychiatrist" },
  { value: "Virginia Psychiatry", link: "/virginia-psychiatrist" },
  { value: "Herndon VA Psychiatry", link: "/psychiatric-provider-herndon-va" },
];

const resourceLinks = [
  { value: "Blogs", link: "/blogs" },
  { value: "Conditions", link: "/conditions" },
  { value: "Search", link: "/search" },
  { value: "Privacy Policy", link: "/policy" },
  { value: "Sitemap", href: "/sitemap.xml" },
];

const footerLinkClass =
  "block rounded px-2 py-1 text-sm leading-6 text-white transition hover:text-blue-300";

const FooterLink = ({ item }) => {
  if (item.href) {
    return (
      <a
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={footerLinkClass}
      >
        {item.value}
      </a>
    );
  }

  return (
    <Link to={item.link} className={footerLinkClass}>
      {item.value}
    </Link>
  );
};

FooterLink.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    link: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
};

const FooterSection = ({ title, isOpen, onToggle, children }) => (
  <div>
    <button
      type="button"
      className="mb-4 flex w-full cursor-pointer items-center justify-between text-left text-xl font-semibold md:cursor-default"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      {title}
      <span className="md:hidden">{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
    </button>
    <div className={`${isOpen ? "block" : "hidden"} md:block`}>{children}</div>
  </div>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Footer = () => {
  const { blogs } = useContext(BlogContext);
  const [isCareOpen, setIsCareOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isConditionsOpen, setIsConditionsOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  const servicesToShow = useMemo(
    () =>
      servicesDataList.slice(0, 10).map((service) => ({
        value: service.name,
        link: service.path || `/services/${service.id}`,
      })),
    [],
  );
  const conditionsToShow = useMemo(
    () =>
      getConditionHubs()
        .slice(0, 10)
        .map((condition) => ({
          value: condition.title,
          link: getConditionHubPath(condition),
        })),
    [],
  );
  const blogsToShow = useMemo(() => blogs.slice(0, 4), [blogs]);

  return (
    <footer id="site-footer" className="mt-16 bg-[#333743] py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1fr_1fr_1fr_1fr_1fr]">
          <div className="xl:mr-8">
            <img
              width={32}
              height={32}
              src={TinkaLogo}
              alt="Tinka Health Services Logo"
              className="mb-4 w-32"
              loading="lazy"
            />
            <p className="max-w-sm text-sm leading-6 text-slate-200">
              Psychiatric evaluations, follow-up care, telehealth support, and
              practical wellness services for patients in Maryland, Washington
              DC, and Virginia.
            </p>
            <p className="mt-4 font-semibold">Connect with us</p>
            <div className="mt-2 flex items-center justify-start gap-3">
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
              <div className="rounded-lg border border-white/15 bg-[#4b4e57] px-3 py-3 text-sm leading-6">
                <p>
                  If you are in a life-threatening situation, don&apos;t use this
                  site. Please visit the sites below:
                </p>
              </div>
              <button
                className="mt-4 flex items-center gap-2 text-white hover:text-blue-300 md:hidden"
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
                      className={footerLinkClass}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <FooterSection
            title="Care"
            isOpen={isCareOpen}
            onToggle={() => setIsCareOpen(!isCareOpen)}
          >
            <ul className="space-y-1">
              {careLinks.map((item) => (
                <li key={item.value}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection
            title="Services"
            isOpen={isServicesOpen}
            onToggle={() => setIsServicesOpen(!isServicesOpen)}
          >
            <ul className="space-y-1">
              {servicesToShow.map((service) => (
                <li key={service.link}>
                  <FooterLink item={service} />
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services"
                  className="block rounded border border-blue-300 px-2 py-2 text-center text-sm font-semibold text-blue-200 hover:border-blue-200 hover:text-blue-100"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection
            title="Conditions"
            isOpen={isConditionsOpen}
            onToggle={() => setIsConditionsOpen(!isConditionsOpen)}
          >
            <ul className="space-y-1">
              {conditionsToShow.map((condition) => (
                <li key={condition.link}>
                  <FooterLink item={condition} />
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/conditions"
                  className="block rounded border border-blue-300 px-2 py-2 text-center text-sm font-semibold text-blue-200 hover:border-blue-200 hover:text-blue-100"
                >
                  View All Conditions
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection
            title="Locations"
            isOpen={isLocationsOpen}
            onToggle={() => setIsLocationsOpen(!isLocationsOpen)}
          >
            <ul className="space-y-1">
              {locationLinks.map((item) => (
                <li key={item.value}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection
            title="Company"
            isOpen={isCompanyOpen}
            onToggle={() => setIsCompanyOpen(!isCompanyOpen)}
          >
            <ul className="space-y-1">
              {companyLinks.map((item) => (
                <li key={item.value}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection
            title="Resources"
            isOpen={isResourcesOpen}
            onToggle={() => setIsResourcesOpen(!isResourcesOpen)}
          >
            <ul className="space-y-1">
              {resourceLinks.map((item) => (
                <li key={item.value}>
                  <FooterLink item={item} />
                </li>
              ))}
              {blogsToShow.map((blog, index) => (
                <li key={index}>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className={`${footerLinkClass} break-words`}
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/blogs"
                  className="block rounded border border-blue-300 px-2 py-2 text-center text-sm font-semibold text-blue-200 hover:border-blue-200 hover:text-blue-100"
                >
                  View All Blogs
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>
        <div className="mt-8 border-t border-white/15 pt-6 text-center text-sm text-slate-200">
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
