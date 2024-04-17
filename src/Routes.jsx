import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import ContactUs from "./components/pages/Contact";
import Details from "./components/pages/Details";
import LuxuryRooms from "./components/pages/LuxuryRooms";

import { new_fountain_db } from "./data";

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
        <Route
          path="/room/details/:id"
          element={
            <Details
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
              data={new_fountain_db}
            />
          }
        />
        <Route
          path="/luxury-rooms"
          element={
            <LuxuryRooms isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          }
        />
      </Routes>
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
};

export default AppRoutes;
