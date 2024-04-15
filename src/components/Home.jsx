import React, { useState, useEffect } from "react";

import AnimatedSlider from "./Sliders";
import { Link } from "react-router-dom";

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
        <div className="">
          <AnimatedSlider />
        </div>
        <div className="flex justify-center">
          <div className="container mt-[50px] lg:mt-[50px]">
            <h1 className="text-[25px] lg:text-[30px]">Our Luxury Rooms</h1>
            <hr className="mt-3" />
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              <div className="grid gap-4 mt-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {new_fountain_db.map((data, index) => (
                  <div
                    key={index}
                    className={`relative rounded-tr-md bg-white shadow-md hover:shadow-lg p-4 m-2 ${
                      isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
                    }`}
                  >
                    <img
                      src={data.image}
                      alt=""
                      className="max-w-full w-full h-60 lg:h-60 object-cover"
                    />
                    <h1 className="text-md lg:text-xl font-semibold mt-3">
                      {data.name}
                    </h1>
                    <h3 className="text-gray-400">{data.room_details}</h3>
                    <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-tr-md rounded-bl-md text-xs font-bold">
                      ₦{data.price}
                    </span>
                    <Link to={`/room/details/${data.id}`} className="transition-colors duration-300">
                      <button
                        className={`button button-sm cursor-pointer lg:button-md bg-gray-800 p-2 mt-4 rounded-md text-[12px] lg:text-[14px] ${
                          isDarkMode
                            ? "bg-white text-gray-800 font-semibold"
                            : "text-white font-normal"
                        } flex justify-center w-full`}
                      >
                        See More
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
