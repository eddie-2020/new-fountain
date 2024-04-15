import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setIsMenuOpen(false);

    if (index === 1) {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close the menu if it's open
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav
      className={`shadow-lg ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } fixed top-0 w-[100%] z-10`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <span className="font-semibold">New Fountain</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeLink === 0
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleLinkClick(0)}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeLink === 1
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleLinkClick(1)}
                >
                  Services
                </Link>
                <Link
                  to="/contact-us"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeLink === 2
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleLinkClick(2)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center"></div>
          <div className="flex items-center ml-4 space-x-2">
            {/* Toggle theme button */}
            <button
              onClick={toggleTheme}
              className="text-gray-400 hover:text-gray-600"
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}{" "}
            </button>
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <BiMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => handleLinkClick(0)} // Close the menu when a link is clicked
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => handleLinkClick(1)} // Close the menu when a link is clicked
            >
              Services
            </Link>
            <Link
              to="/contact-us"
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => handleLinkClick(2)} // Close the menu when a link is clicked
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
