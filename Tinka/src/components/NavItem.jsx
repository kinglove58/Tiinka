import React, { useState, useMemo, memo, useCallback } from "react";
import TinkaLogo from "/images/logo/Tinka-HS-LOGO-22.webp";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import service_data from "../pages/services/serviceData";
import Teletherapy from "/images/img_mental_health/hero/teletherapy.webp";
import BookingLink from "./BookingLink";

const NavItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setIsHovered(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setIsHovered(false);
    }
  }, []);

  const handleServiceClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      setIsHovered(!isHovered);
    }
  }, [isHovered]);

  const handleMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  const handleLinkClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      setShowMenu(false);
    }
  }, []);

  const servicesToShow = useMemo(() => service_data, []);

  // Function to shorten service names
  const shortenServiceName = (name) => {
    const shortNames = {
      "Attention Deficit Hyperactivity Disorder": "ADHD",
      "Obsessive Compulsive Disorder": "OCD",
      "Post Traumatic Stress Disorder": "PTSD",
      "Opioid Medication Assistant Treatment": "Opioid MAT",
      "Autism Spectrum Disorder": "Autism Support",
      "Medication Management": "Med Management",
    };
    return shortNames[name] || name;
  };

  return (
    <header className="h-20 fixed w-full top-0 right-0 bg-[#f1f2f6] text-gray-800 z-50 px-4 md:px-16 hover:bg-white">
      <div className="h-full flex justify-between items-center">
        <Link to={"/"}>
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
          className="lg:hidden cursor-pointer"
          onClick={handleMenu}
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
              ? "flex absolute top-20 left-0 w-full px-6 py-6 shadow-md min-h-[50vh] bg-white"
              : "hidden"
          } lg:flex lg:flex-row h-full`}
        >
          <ul
            className={`${
              showMenu && "w-full flex-col overflow-auto"
            } h-full flex items-center gap-5`}
          >
            <NavItemLink to="/about" onClick={handleLinkClick}>
              About Us
            </NavItemLink>
            <NavItemLink
              to="/primary-preventive-care"
              onClick={handleLinkClick}
            >
              Primary & Preventive Care
            </NavItemLink>
                      <li
              className="w-full font-semibold text-gray-800 hover:text-blue-800 transition duration-300 cursor-pointer"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              onClick={handleServiceClick}
            >
              <p className="flex items-center h-10 lg:h-20 justify-between lg:gap-1">
                Services {isHovered ? <FaAngleUp /> : <FaAngleDown />}
              </p>
              {isHovered && (
                <div className="lg:absolute lg:top-20 w-full lg:right-0 border-t border-gray-500 shadow-md py-2 px-4 md:px-16 lg:py-4 bg-white">
                  <div
                    className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 lg:gap-x-3 lg:gap-y-2 w-full p-4 lg:p-6 rounded-xl relative overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95)), url(${Teletherapy})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {servicesToShow.map((service) => (
                      <li
                        key={service.id}
                        className="w-full text-gray-800 hover:text-blue-800 transition duration-300 relative z-10"
                        onClick={handleLinkClick}
                      >
                        <Link
                          to={`/services/${service.id}`}
                          className="h-8 lg:h-10 flex w-full items-center text-sm lg:text-base font-semibold"
                          onClick={() => setIsHovered(false)}
                          title={service.name}
                        >
                          {shortenServiceName(service.name)}
                        </Link>
                      </li>
                    ))}
                    <li className="w-full border-t border-gray-400 pt-3 mt-3 lg:col-span-4 xl:col-span-6 relative z-10">
                      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-start lg:items-center">
                        <Link
                          to="/services"
                          className="text-blue-600 hover:text-blue-800 transition duration-300 font-bold flex items-center"
                          onClick={() => setIsHovered(false)}
                        >
                          View All Services →
                        </Link>
                        <BookingLink
                          onClick={(e) => {
                            handleLinkClick(e);
                            setIsHovered(false);
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
                        >
                          <FaArrowRight className="text-sm" />
                          Book Appointment
                        </BookingLink>
                      </div>
                    </li>
                  </div>
                </div>
              )}
            </li>
            <NavItemLink to="/blogs" onClick={handleLinkClick}>
              Blogs
            </NavItemLink>
            <NavItemLink to="/referral" onClick={handleLinkClick}>
              Refer Patient
            </NavItemLink>
            <NavItemLink to="/contact" onClick={handleLinkClick}>
              Contact Us
            </NavItemLink>{" "}
            <a
              href="https://portal.kareo.com/pp-webapp/app/new/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
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

const NavItemLink = ({ to, onClick, children }) => (
  <li
    className="w-full font-semibold text-gray-800 hover:text-blue-800 transition duration-300 text-nowrap"
    onClick={onClick}
  >
    <Link to={to} className="h-10 lg:h-20 flex items-center">
      {children}
    </Link>
  </li>
);

export default memo(NavItem);
