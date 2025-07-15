import React, { useState, useMemo, memo, useCallback } from "react";
import TinkaLogo from "/images/logo/Tinka-HS-LOGO-22.webp";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import service_data from "../pages/services/serviceData";
import Teletherapy from "/images/img_mental_health/hero/teletherapy.webp";

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

  const servicesToShow = useMemo(() => service_data.slice(0, 12), []);

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
        <div
          className="lg:hidden cursor-pointer"
          onClick={handleMenu}
          aria-label="Toggle menu"
        >
          {showMenu ? <RiCloseFill size={25} /> : <GiHamburgerMenu size={25} />}
        </div>
        <nav
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
                <div className="lg:absolute lg:top-20 w-full lg:right-0 border-t border-gray-500 shadow-md py-2 px-4 md:px-16 lg:py-1 lg:flex items-center gap-2 bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3 w-full md:w-2/3 bg-gray-50 p-6 rounded-xl">
                    {servicesToShow.map((service) => (
                      <li
                        key={service.id}
                        className="w-full text-gray-800 hover:text-blue-800 transition duration-300"
                        onClick={handleLinkClick}
                      >
                        <Link
                          to={`/services/${service.id}`}
                          className="h-10 flex w-full"
                          onClick={() => setIsHovered(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                  <li className="w-full relative lg:w-2/4">
                    <img
                      src={Teletherapy}
                      alt="Teletherapy"
                      className="h-auto"
                    />

                    <Link
                      to="/contact"
                      className="absolute top-[50%] left-[15%] hover:bg-white border-2 text-white hover:text-black p-2 md:p-4 border-solid rounded-full border-white"
                      onClick={handleLinkClick}
                    >
                      <FaArrowRight />
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <NavItemLink to="/blogs" onClick={handleLinkClick}>
              Blogs
            </NavItemLink>
            <NavItemLink to="/policy" onClick={handleLinkClick}>
              Policy
            </NavItemLink>
            <NavItemLink to="/contact" onClick={handleLinkClick}>
              Contact Us
            </NavItemLink>{" "}
            <a
              href="https://portal.kareo.com/pp-webapp/app/new/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="whitespace-nowrap font-bold hover:text-blue-800"
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
