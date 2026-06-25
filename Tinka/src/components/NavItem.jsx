import React, { memo, useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import TinkaLogo from "/images/logo/Tinka-HS-LOGO-22.webp";
import Teletherapy from "/images/img_mental_health/hero/teletherapy.webp";
import BookingLink from "./BookingLink";
import serviceData from "../pages/services/serviceData";
import {
  getConditionHubPath,
  getConditionHubs,
} from "../pages/conditions/conditionHubData";

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isConditionsOpen, setIsConditionsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const servicesToShow = useMemo(() => serviceData, []);
  const conditionTopics = useMemo(() => getConditionHubs(), []);

  const closeMenus = useCallback(() => {
    setIsServicesOpen(false);
    setIsConditionsOpen(false);
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
    if (window.innerWidth < 1024) {
      setIsServicesOpen((value) => !value);
      setIsConditionsOpen(false);
    }
  }, []);

  const handleConditionMouseEnter = useCallback(() => {
    if (window.innerWidth >= 1024) setIsConditionsOpen(true);
  }, []);

  const handleConditionMouseLeave = useCallback(() => {
    if (window.innerWidth >= 1024) setIsConditionsOpen(false);
  }, []);

  const handleConditionClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      setIsConditionsOpen((value) => !value);
      setIsServicesOpen(false);
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setShowMenu((value) => !value);
  }, []);

  return (
    <header className="fixed right-0 top-0 z-50 h-20 w-full bg-[#f1f2f6] px-4 text-gray-800 hover:bg-white md:px-16">
      <div className="flex h-full items-center justify-between">
        <Link to="/" onClick={closeMenus}>
          <img
            width={32}
            height={40}
            src={TinkaLogo}
            alt="Tinka Health Services Logo"
            className="h-10 w-auto"
          />
        </Link>

        <button
          type="button"
          className="cursor-pointer lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={showMenu}
          aria-controls="primary-navigation"
        >
          {showMenu ? <RiCloseFill size={25} /> : <GiHamburgerMenu size={25} />}
        </button>

        <nav
          id="primary-navigation"
          className={`${
            showMenu
              ? "absolute left-0 top-20 flex min-h-[50vh] w-full bg-white px-6 py-6 shadow-md"
              : "hidden"
          } h-full lg:flex lg:flex-row`}
        >
          <ul
            className={`${
              showMenu ? "w-full flex-col overflow-auto" : ""
            } flex h-full items-center gap-5`}
          >
            <NavItemLink to="/about" onClick={closeMenus}>
              About Us
            </NavItemLink>

            <li
              className="w-full cursor-pointer font-semibold text-gray-800 transition duration-300 hover:text-blue-800"
              onMouseEnter={handleServiceMouseEnter}
              onMouseLeave={handleServiceMouseLeave}
              onClick={handleServiceClick}
            >
              <p className="flex h-10 items-center justify-between lg:h-20 lg:gap-1">
                Services {isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
              </p>
              {isServicesOpen && (
                <MegaMenu>
                  {servicesToShow.map((service) => (
                    <MegaMenuLink
                      key={service.id}
                      to={`/services/${service.id}`}
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

            <li
              className="w-full cursor-pointer font-semibold text-gray-800 transition duration-300 hover:text-blue-800"
              onMouseEnter={handleConditionMouseEnter}
              onMouseLeave={handleConditionMouseLeave}
              onClick={handleConditionClick}
            >
              <p className="flex h-10 items-center justify-between lg:h-20 lg:gap-1">
                Conditions {isConditionsOpen ? <FaAngleUp /> : <FaAngleDown />}
              </p>
              {isConditionsOpen && (
                <MegaMenu>
                  {conditionTopics.map((condition) => (
                    <MegaMenuLink
                      key={condition.slug}
                      to={getConditionHubPath(condition)}
                      title={condition.title}
                      onClick={closeMenus}
                    >
                      {shortenName(condition.title)}
                    </MegaMenuLink>
                  ))}
                  <MegaMenuFooter>
                    <Link
                      to="/conditions"
                      className="flex items-center font-bold text-blue-600 transition duration-300 hover:text-blue-800"
                      onClick={closeMenus}
                    >
                      View All Conditions →
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

            <NavItemLink to="/blogs" onClick={closeMenus}>
              Blogs
            </NavItemLink>
            <NavItemLink to="/referral" onClick={closeMenus}>
              Refer Patient
            </NavItemLink>
            <a
              href="https://portal.kareo.com/pp-webapp/app/new/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenus}
              className="whitespace-nowrap font-semibold hover:text-blue-800"
            >
              Patient Portal
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const MegaMenu = ({ children }) => (
  <div className="bg-white py-2 lg:absolute lg:right-0 lg:top-20 lg:w-full lg:border-t lg:border-gray-500 lg:px-16 lg:py-4 lg:shadow-md">
    <div
      className="relative grid grid-cols-1 gap-1 overflow-hidden rounded-xl p-4 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-2 lg:p-6 xl:grid-cols-6"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95)), url(${Teletherapy})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  </div>
);

const MegaMenuLink = ({ to, title, onClick, children }) => (
  <li
    className="relative z-10 w-full text-gray-800 transition duration-300 hover:text-blue-800"
    onClick={onClick}
  >
    <Link
      to={to}
      className="flex h-8 w-full items-center text-sm font-semibold lg:h-10 lg:text-base"
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

export default memo(NavItem);
