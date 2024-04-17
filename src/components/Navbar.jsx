import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FiSun, FiMoon } from "react-icons/fi";

import logo from "../images/logo/new_fountain_logo.svg";

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

    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav
      className={`shadow-lg ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } fixed top-0 p-1 w-[100%] z-10`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <span className="font-semibold">
                  <img
                    src={logo}
                    alt="New Fountain"
                    className={`w-28 h-16 mt-1 m-1 ${
                      isDarkMode ? "bg-white rounded-sm" : "bg-none"
                    }`}
                  />
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeLink === 0
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleLinkClick(0)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/luxury-rooms"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeLink === 1
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleLinkClick(1)}
                >
                  Luxury Rooms
                </NavLink>
                <NavLink
                  to="/services"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeLink === 2
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleLinkClick(2)}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeLink === 3
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleLinkClick(3)}
                >
                  Contact Us
                </NavLink>
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
          <hr className="mt-2" />
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className="block px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handleLinkClick(0)}
            >
              Home
            </NavLink>
            <NavLink
              to="/luxury-rooms"
              className="block px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handleLinkClick(1)}
            >
              Luxury Rooms
            </NavLink>
            <NavLink
              to="/services"
              className="block px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handleLinkClick(2)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact-us"
              className="block px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => handleLinkClick(3)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
