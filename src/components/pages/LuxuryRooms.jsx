import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MaxSkeletonLoader from "../skeleton/MaxSkeleton";
import { new_fountain_db } from "../../data";

import { FiChevronLeft } from "react-icons/fi";

const LuxuryRooms = ({ isDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto text-center mt-[100px] mb-[70px]">
      <div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <Link
              to="/"
              className={`fixed top-0 mt-[100px] z-10 left-4 lg:left-10 flex items-center p-2 rounded-full hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              <FiChevronLeft className="h-6 w-6 mr-0 lg:mr-2" /> Back
            </Link>
          </div>
          <h1 className="font-bold text-[20px] md:text-[30px]">Luxury Rooms</h1>
          <div className="mt-2 w-10 h-1 rounded-lg bg-green-400"></div>
        </div>
        {isLoading ? (
          <MaxSkeletonLoader />
        ) : (
          <div className="grid gap-4 mt-[50px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
                <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-tr-md rounded-bl-md text-xs font-bold flex flex-col items-end">
                  <span>₦{data.price}</span>
                  <span className="text-[10px]">Per Night</span>
                </span>
                <Link
                  to={`/room/details/${data.id}`}
                  className="transition-colors duration-300"
                >
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
  );
};

export default LuxuryRooms;
