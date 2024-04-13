import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start">
            <div className="flex-shrink-0">
              <span className="text-white font-semibold">Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${activeLink === 0 ? 'bg-gray-700 hover:bg-gray-700' : 'hover:bg-gray-700 hover:text-white'}`}
                  onClick={() => handleLinkClick(0)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${activeLink === 1 ? 'bg-gray-700 hover:bg-gray-700' : 'hover:bg-gray-700 hover:text-white'}`}
                  onClick={() => handleLinkClick(1)}
                >
                  About
                </a>
                <a
                  href="#"
                  className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${activeLink === 2 ? 'bg-gray-700 hover:bg-gray-700' : 'hover:bg-gray-700 hover:text-white'}`}
                  onClick={() => handleLinkClick(2)}
                >
                  Services
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <MdSearch className="text-gray-400" />
                <input type="text" placeholder="Search" className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300 ml-2" />
              </div>
            </div>
            <div className="block md:hidden">
              <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
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
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;