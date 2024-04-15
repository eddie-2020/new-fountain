import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Services from "./components/Services";
import ContactUs from "./components/Contact";

const AppRoutes = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/services"
          element={
            <Services isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
};

export default AppRoutes;
