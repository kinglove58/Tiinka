import React, { useState } from "react";
import TinkaLogo from "../assets/images/logo/Tinka-HS-LOGO-22.png";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import service_data from "../pages/services/serviceData";
import Teletherapy from "../assets/images/img mental health/hero/teletherapy.png";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

const NavItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setIsHovered(false);
    }
  };

  const handleServiceClick = () => {
    if (window.innerWidth < 1024) {
      setIsHovered(!isHovered);
    }
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="h-20 fixed w-full top-0 right-0 bg-white text-gray-800 shadow-md z-50 px-4 md:px-16">
      <div className="h-full flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={TinkaLogo}
            alt="Tinka Health Services Logo"
            className="h-10 w-auto"
          />
        </Link>
        <div className="lg:hidden cursor-pointer" onClick={handleMenu}>
          {showMenu ? <RiCloseFill size={25} /> : <RiMenu3Line size={25} />}
        </div>
        <nav
          className={`${
            showMenu
              ? "flex absolute top-20 left-0 w-full px-6 py-6 shadow-md min-h-[60vh] bg-white"
              : "hidden"
          } lg:flex lg:flex-row h-full`}
        >
          <ul
            className={`${
              showMenu && "w-full flex-col overflow-auto"
            } h-full flex items-center gap-5`}
          >
            <li className="w-full font-semibold text-gray-800 hover:text-blue-800 transition duration-300 text-nowrap">
              <Link to={"/about"} className="h-10 lg:h-20 flex items-center">
                About Us
              </Link>
            </li>
            <li
              className="w-full font-semibold text-gray-800 hover:text-blue-800 transition duration-300"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <p
                className="flex items-center h-10 lg:h-20 justify-between lg:gap-1"
                onClick={handleServiceClick}
              >
                Services {isHovered ? <FaAngleUp /> : <FaAngleDown />}
              </p>
              {isHovered && (
                <div className="lg:absolute lg:top-20 w-full lg:right-0 border-t border-gray-500 shadow-md py-3 px-4 md:px-16 lg:py-6 lg:flex items-center gap-2 bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-3 w-2/3">
                    {service_data.map((service) => (
                      <li
                        key={service.id}
                        className="w-full text-gray-800 hover:text-blue-800 transition duration-300"
                      >
                        <Link
                          to={`/services/${service.id}`}
                          className="h-10 flex w-full"
                        >
                          {service.id}
                        </Link>
                      </li>
                    ))}
                  </div>
                  <li className="w-full lg:w-2/4">
                    <img
                      src={Teletherapy}
                      alt="Teleterapy"
                      className="h-auto"
                    />
                  </li>
                </div>
              )}
            </li>
            <li className="w-full h-20 font-semibold text-gray-800 hover:text-blue-800 transition duration-300">
              <Link to={"/blogs"} className="h-10 lg:h-20 flex items-center">
                Blogs
              </Link>
            </li>
            <li className="w-full h-20 font-semibold text-gray-800 hover:text-blue-800 transition duration-300">
              <Link to={"/"} className="h-10 lg:h-20 flex items-center">
                FAQs
              </Link>
            </li>
            <li className="w-full h-20 font-semibold text-gray-800 hover:text-blue-800 transition duration-300">
              <Link to={"/policy"} className="h-10 lg:h-20 flex items-center">
                Policy
              </Link>
            </li>
            <li className="w-full h-20 font-semibold text-gray-800 hover:text-blue-800 transition duration-300 text-nowrap">
              <Link to={"/contact"} className="h-10 lg:h-20 flex items-center">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavItem;
