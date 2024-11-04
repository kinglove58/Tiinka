import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import TinkaLogo from "../assets/images/logo/Tinka-HS-LOGO-22.png";
import servicesDataList from "../pages/services/serviceData";
import Teletherapy from "../assets/images/img mental health/hero/teletherapy.png";

function NavItem() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-gray-800 shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={TinkaLogo}
            alt="Tinka Health services logo"
            className="h-8 w-auto"
          />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row w-full md:w-auto items-start md:items-center mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto">
            <li className="my-2 md:my-0 w-full md:w-auto">
              <Link
                to="/about"
                className="block text-gray-800 hover:text-blue-600 py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                About us
              </Link>
            </li>
            <li
              className="my-2 md:my-0 w-full md:w-auto"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="block text-gray-800 hover:text-gray-600 py-2 md:py-0 focus:outline-none">
                Services
              </button>
              {showServices && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-10 grid grid-cols-2 w-screen px-16">
                  <div className="grid grid-cols-3">
                    {servicesDataList.slice(0, 12).map((service) => (
                      <div key={service.id}>
                        <ul>
                          <li className="my-1 break-words">
                            <Link
                              to={`/services/${service.id}`}
                              className="text-gray-700 hover:text-blue-500"
                            >
                              {service.id}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-1 relative text-white">
                    <img
                      width={1136}
                      height={542}
                      src={Teletherapy}
                      alt="teletherapy"
                      className="max-w-md"
                    />
                    <div className="p-2 bg-red-500 text-white rounded-full absolute left-12 bottom-1/3">
                      <span className="inline-flex items-center justify-center p-2 bg-red-500 rounded-full">
                        <IoMdArrowForward size={26} />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="my-2 md:my-0 w-full md:w-auto">
              <Link
                to="/blogs"
                className="block text-blue- hover:text-gray-600 py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li className="my-2 md:my-0 w-full md:w-auto">
              <Link
                to="/"
                className="block text-gray-800 hover:text-gray-600 py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                FAQS
              </Link>
            </li>
            <li className="my-2 md:my-0 w-full md:w-auto">
              <Link
                to="/policy"
                className="block text-gray-800 hover:text-gray-600 py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                Policy
              </Link>
            </li>
            <li className="my-2 md:my-0 w-full md:w-auto">
              <Link
                to="/contact"
                className="block text-gray-800 hover:text-gray-600 py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavItem;
