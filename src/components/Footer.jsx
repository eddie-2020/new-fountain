import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = ({ isDarkMode, toggleTheme }) => {
  return (
    <div
      className={`bg-white p-4 ${
        isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
      } fixed bottom-0 w-full flex justify-center items-center`}
    >
      <div className="flex items-center space-x-4">
        <a href="#" className={` ${isDarkMode ? "text-white hover:text-gray-400" : "text-gray-600 hover:text-gray-800"}`}>
          <FaFacebook />
        </a>
        <a href="#" className={` ${isDarkMode ? "text-white hover:text-gray-400" : "text-gray-600 hover:text-gray-800"}`}>
          <FaTwitter />
        </a>
        <a href="#" className={` ${isDarkMode ? "text-white hover:text-gray-400" : "text-gray-600 hover:text-gray-800"}`}>
          <FaInstagram />
        </a>
      </div>
      <p className={`text-sm ml-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>&copy; 2024 All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
