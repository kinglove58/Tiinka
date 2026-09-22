import {
  memo,
  useCallback,
  useMemo,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaAngleDown,
  FaAngleUp,
  FaArrowRight,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import TinkaLogo from "/images/logo/Tinka-HS-LOGO-22.webp";
import BookingLink from "./BookingLink";
import serviceData from "../pages/services/serviceData";
import GoogleReviewBadge from "./GoogleReviewBadge";

const shortNames = {
  "Attention Deficit Hyperactivity Disorder": "ADHD",
  "Obsessive Compulsive Disorder": "OCD",
  "Post Traumatic Stress Disorder": "PTSD",
  "Opioid Medication Assistant Treatment": "Opioid MAT",
  "Autism Spectrum Disorder": "Autism Support",
  "Medication Management": "Med Management",
};

const shortenName = (name) => shortNames[name] || name;

const NavItem = () => {

  const headerRef = useRef(null);
  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const updateHeight = () =>
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${headerRef.current.offsetHeight}px`,
      );
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerRef.current);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const servicesToShow = useMemo(() => serviceData, []);

  const closeMenus = useCallback(() => {
    setIsServicesOpen(false);
    if (window.innerWidth < 1024) {
      setShowMenu(false);
    }
  }, []);

  const handleServiceMouseEnter = useCallback(() => {
    if (window.innerWidth >= 1024) setIsServicesOpen(true);
  }, []);

  const handleServiceMouseLeave = useCallback(() => {
    if (window.innerWidth >= 1024) setIsServicesOpen(false);
  }, []);

  const handleServiceClick = useCallback(() => {
    setIsServicesOpen((value) => !value);
  }, []);

  const toggleMenu = useCallback(() => {
    setShowMenu((value) => !value);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed right-0 top-0 z-50 w-full text-gray-800"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenus();
          setShowMenu(false);
        }
      }}
    >

        <div className="bg-[#005ab0] text-white" data-home-utility>
          <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-5 gap-y-4 px-6 py-5 text-xs max-sm:flex-col max-sm:justify-center max-sm:gap-y-2 max-sm:px-4 max-sm:py-3 max-sm:text-center sm:px-8 lg:px-12">
            <div className="shrink-0 leading-5 max-sm:text-center">
              <span className="block whitespace-nowrap font-semibold">Now accepting new patients</span>
              <Link to="/insurance-we-accept" className="inline-flex min-h-8 items-center underline underline-offset-4 hover:text-blue-100 max-sm:min-h-0">Insurance We Accept</Link>
            </div>
            <div className="flex flex-1 flex-wrap justify-center gap-x-5 gap-y-3 leading-5 max-sm:w-full max-sm:flex-none">
              <div className="whitespace-nowrap">
              <Link
                to="/psychiatric-provider-herndon-va"
                className="block hover:underline"
              >
                <span className="block font-semibold">
                  585 Grove St, Suite 145
                </span>
                <span className="block">Herndon, VA 20170</span>
              </Link>
                <a href="tel:+15713498285" className="inline-flex min-h-8 items-center gap-2 font-semibold hover:underline max-sm:min-h-0"><FaPhoneAlt aria-hidden="true" />571-349-8285</a>
              </div>
              <div className="hidden md:block whitespace-nowrap">
              <Link
                to="/dc-psychiatrist"
                className="block hover:underline"
              >
                <span className="block font-semibold">
                  4315 50th Street NW, Suite 100
                </span>
                <span className="block">Washington, DC 20016</span>
              </Link>
                <a href="tel:+12029334300" className="inline-flex min-h-8 items-center gap-2 font-semibold hover:underline max-sm:min-h-0"><FaPhoneAlt aria-hidden="true" />202-933-4300</a>
              </div>
              <div className="hidden md:block whitespace-nowrap">
              <Link
                to="/maryland-psychiatrist"
                className="block hover:underline"
              >
                <span className="block font-semibold">
                  5457 Twin Knolls Road, Suite 300
                </span>
                <span className="block">Columbia, MD 21045</span>
              </Link>
                <a href="tel:+14432956600" className="inline-flex min-h-8 items-center gap-2 font-semibold hover:underline max-sm:min-h-0"><FaPhoneAlt aria-hidden="true" />443-295-6600</a>
              </div>

            </div>
            <div className="flex shrink-0 items-center gap-3 max-sm:justify-center">
              <div className="flex items-center gap-1" aria-label="Social media">
                {[
                [
                  "Facebook",
                  "https://www.facebook.com/tinkahealthservices",
                  FaFacebookF,
                ],
                [
                  "Instagram",
                  "https://www.instagram.com/tinkahealthservices/",
                  FaInstagram,
                ],
                ["X", "https://x.com/Tinkahealthserv", FaXTwitter],
                [
                  "YouTube",
                  "https://www.youtube.com/@TinkaHealthServices",
                  FaYoutube,
                ],
                ].map(([label, href, Icon]) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/15 focus-visible:outline focus-visible:outline-2"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
                ))}
              </div>
              <GoogleReviewBadge
                theme="dark"
                className="shrink-0 !bg-transparent !border-none !shadow-none !px-0"
              />
            </div>
            <Link
              to="/contact"
              className="hidden min-h-8 items-center whitespace-nowrap underline underline-offset-4 hover:text-blue-100 max-sm:inline-flex max-sm:min-h-0"
            >
              View all locations
            </Link>
          </div>
        </div>
      <div className="relative h-20 bg-[#f1f2f6] px-4 hover:bg-white md:px-8 xl:px-16">
        <div className="flex h-full items-center justify-between">
          <Link to="/" onClick={closeMenus}>
            <img
              width={32}
              height={40}
              src={TinkaLogo}
              alt="Tinka Health Services Logo"
              className="h-auto max-h-10 w-auto max-w-[220px] sm:max-w-[280px]"
            />
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={showMenu}
            aria-controls="primary-navigation"
          >
            {showMenu ? (
              <RiCloseFill size={25} />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </button>

          <nav
            id="primary-navigation"
            style={{ maxHeight: "calc(100dvh - var(--site-header-height, 240px))" }}
            className={`${
              showMenu
                ? "absolute left-0 top-20 flex max-h-[calc(100dvh-128px)] w-full overflow-y-auto bg-white px-6 py-6 shadow-md"
                : "hidden"
            } lg:h-full lg:flex lg:flex-row`}
          >
            <ul
              className={`${
                showMenu ? "w-full flex-col" : ""
              } flex items-center gap-5 lg:h-full`}
            >
              <NavItemLink to="/about" onClick={closeMenus}>
                About Us
              </NavItemLink>

              <li
                className="w-full cursor-pointer font-semibold text-gray-800 transition duration-300 hover:text-blue-800"
                onMouseEnter={handleServiceMouseEnter}
                onMouseLeave={handleServiceMouseLeave}
              >
                <button
                  type="button"
                  onClick={handleServiceClick}
                  aria-expanded={isServicesOpen}
                  className="flex min-h-11 w-full items-center justify-between lg:h-20 lg:gap-1"
                >
                  Services {isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
                </button>
                {isServicesOpen && (
                  <MegaMenu>
                    {servicesToShow.map((service) => (
                      <MegaMenuLink
                        key={service.id}
                        to={service.path || `/services/${service.id}`}
                        title={service.name}
                        onClick={closeMenus}
                      >
                        {shortenName(service.name)}
                      </MegaMenuLink>
                    ))}
                    <MegaMenuFooter>
                      <Link
                        to="/services"
                        className="flex items-center font-bold text-blue-600 transition duration-300 hover:text-blue-800"
                        onClick={closeMenus}
                      >
                        View All Services →
                      </Link>
                      <BookingLink
                        onClick={closeMenus}
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-700"
                      >
                        <FaArrowRight className="text-sm" />
                        Book Appointment
                      </BookingLink>
                    </MegaMenuFooter>
                  </MegaMenu>
                )}
              </li>

              <NavItemLink to="/meet-our-provider" onClick={closeMenus}>
                Meet the Doctor
              </NavItemLink>

              <NavItemLink to="/blogs" onClick={closeMenus}>
                Blogs
              </NavItemLink>
              <NavItemLink to="/referral" onClick={closeMenus}>
                Refer Patient
              </NavItemLink>

              <li>
                <a
                  href="https://portal.kareo.com/pp-webapp/app/new/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenus}
                  className="whitespace-nowrap font-semibold hover:text-blue-800"
                >
                  Patient Portal
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const MegaMenu = ({ children }) => (
  <div className="bg-white py-2 lg:absolute lg:right-0 lg:top-20 lg:w-full lg:border-t lg:border-gray-500 lg:px-16 lg:py-4 lg:shadow-md">
    <ul
      className="relative grid lg:max-h-[calc(100dvh-var(--site-header-height,240px)-32px)] grid-cols-1 gap-1 overflow-y-auto rounded-xl p-4 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-2 lg:p-6 xl:grid-cols-6"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95)), url('/images/img_mental_health/hero/teletherapy.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </ul>
  </div>
);

const MegaMenuLink = ({ to, title, onClick, children }) => (
  <li
    className="relative z-10 w-full text-gray-800 transition duration-300 hover:text-blue-800"
    onClick={onClick}
  >
    <Link
      to={to}
      className="flex min-h-11 w-full items-center py-2 text-sm font-semibold lg:text-base"
      title={title}
    >
      {children}
    </Link>
  </li>
);

const MegaMenuFooter = ({ children, withPanel = false }) => (
  <li
    className={`relative z-10 mt-3 w-full border-t border-gray-400 pt-3 ${
      withPanel ? "lg:col-span-4 xl:col-span-5" : "lg:col-span-4 xl:col-span-6"
    }`}
  >
    <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-4">
      {children}
    </div>
  </li>
);

const NavItemLink = ({ to, onClick, children }) => (
  <li
    className="w-full whitespace-nowrap font-semibold text-gray-800 transition duration-300 hover:text-blue-800"
    onClick={onClick}
  >
    <Link to={to} className="flex h-10 items-center lg:h-20">
      {children}
    </Link>
  </li>
);

MegaMenu.propTypes = { children: PropTypes.node };
MegaMenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
MegaMenuFooter.propTypes = {
  children: PropTypes.node,
  withPanel: PropTypes.bool,
};
NavItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default memo(NavItem);
