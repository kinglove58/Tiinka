import React, { useState, useMemo, memo } from "react";
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

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setShowMenu(false);
    }
  };

  // Memoize the sliced data
  const servicesToShow = useMemo(
    () => service_data.slice(0, 12),
    [service_data]
  );

  return (
    <header className="h-20 fixed w-full top-0 right-0 bg-[#f1f2f6] text-gray-800 z-50 px-4 md:px-16 hover:bg-white">
      <div className="h-full flex justify-between items-center">
        <Link to={"/"}>
          <img
            width={32}
            height={32}
            src={TinkaLogo}
            alt="Tinka Health Services Logo"
            className="h-10 w-auto"
          />
        </Link>
        <div className="lg:hidden cursor-pointer" onClick={handleMenu}>
          {showMenu ? <RiCloseFill size={25} /> : <GiHamburgerMenu size={25} />}
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
            <li
              className="w-full font-semibold text-gray-800 hover:text-blue-800 transition duration-300 text-nowrap"
              onClick={handleLinkClick}
            >
              <Link to={"/about"} className="h-10 lg:h-20 flex items-center">
                About Us
              </Link>
            </li>
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
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 lg:gap-x-3 w-2/3 bg-gray-50 p-6 rounded-xl">
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
                      className="absolute top-[50%] left-[15%] hover:bg-white border-2 text-white hover:text-black p-4 border-solid rounded-full border-white"
                      onClick={handleLinkClick}
                    >
                      <FaArrowRight />
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li
              className="w-full h-20 font-semibold text-gray-800 hover:text-blue-800 transition duration-300"
              onClick={handleLinkClick}
            >
              <Link to={"/blogs"} className="h-5 lg:h-20 flex items-center">
                Blogs
              </Link>
            </li>
            <li
              className="w-full h-20 font-semibold text-gray-800 hover:text-blue-800 transition duration-300"
              onClick={handleLinkClick}
            >
              <Link to={"/policy"} className="h-10 lg:h-20 flex items-center">
                Policy
              </Link>
            </li>
            <li
              className="w-full h-20 font-semibold text-gray-800 hover:text-blue-800 transition duration-300 text-nowrap"
              onClick={handleLinkClick}
            >
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

export default memo(NavItem);
