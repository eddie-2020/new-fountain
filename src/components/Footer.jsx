import React from "react";

const Footer = ({ isDarkMode, toggleTheme }) => {
  return (
    <div
      className={`bg-white p-2 ${
        isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
      } fixed bottom-0 w-full text-center`}
    >
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
