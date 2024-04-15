import React from "react";

import {new_fountain_services} from "../data"

const Services = ({isDarkMode, toggleTheme}) => {
  return (
    <div className="text-center mt-[70px] mb-[70px]">
      <div className={`bg-white text-dark ${isDarkMode ? "dark:bg-gray-800 text-white" : ""}`}>
        <h1 className="text-[20px] md:text-[30px]">Our Services</h1>
        <div>
          {new_fountain_services.map((data, index) => {
            <div key={index} className="">
              <p className="mt-2">{data.services}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
