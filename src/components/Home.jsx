import React, { useState, useEffect } from "react";

import AnimatedSlider from "./Sliders";
import { new_fountain_db } from "../data";

import SkeletonLoader from "./Skeleton";

const Home = ({ isDarkMode, toggleTheme }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="mb-[100px]">
      <div className="text-center mt-[70px]">
        <div className="h-[100vh]">
          <AnimatedSlider />
        </div>
        <h1 className="text-[25px] lg:text-[30px]">Our Luxury Rooms</h1>
        <hr />
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className="grid grid-cols-3 gap-4 mt-3">
            {new_fountain_db.map((data, index) => (
              <div
                key={index}
                className={`relative rounded-tr-md bg-white shadow-md hover:shadow-lg p-4 m-2 cursor-pointer ${
                  isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
                }`}
              >
                <img
                  src={data.image}
                  alt=""
                  className="max-w-full w-[100%] h-40 lg:h-60"
                />
                <h1 className="text-md lg:text-xl font-semibold mt-3">
                  {data.name}
                </h1>
                <h3 className="text-gray-400">{data.room_details}</h3>
                <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-tr-md rounded-bl-md text-xs font-bold">
                  ₦{data.price}
                </span>
                <button
                  className={`button button-sm lg:button-md bg-gray-800 text-white p-2 mt-4 rounded-md text-[15px] ${
                    isDarkMode ? "bg-white text-black font-bold" : ""
                  } flex justify-center w-full`}
                >
                  See More
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
