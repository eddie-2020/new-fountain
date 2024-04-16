import React, { useState, useEffect } from "react";

import AnimatedSlider from "./Sliders";
import { Link } from "react-router-dom";

import { new_fountain_db } from "../data";
import SkeletonLoader from "./Skeleton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronRight } from "react-icons/fi";

import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { new_fountain_services } from "../data";

const Home = ({ isDarkMode, toggleTheme }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();

  useEffect(() => {
    if (!isLoading || inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [isLoading, inView, animation]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="mb-[100px]">
      <div className="text-center mt-[70px]">
        <div className="">
          <AnimatedSlider />
        </div>
        <div className="flex justify-center mb-[20px]">
          <div className="container mt-[50px] lg:mt-[50px]">
            <div className="container mt-[50px] lg:mt-[50px]">
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-[25px] lg:text-[30px]">
                  Our Luxury Rooms
                </h1>
                <div className="mt-4 w-10 h-1 rounded-lg bg-green-400"></div>
              </div>
            </div>

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
        <hr />
        <div className="mt-[50px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-[25px] lg:text-[30px]">
              Our Amazing Features
            </h1>
            <div className="mt-4 w-10 h-1 rounded-lg bg-green-400"></div>
          </div>{" "}
          <div className="flex justify-center mt-[30px] m-5">
            <div className="container">
              {new_fountain_services.map((data, index) => (
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                  key={index}
                >
                  {data.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center mb-4 flex-col"
                      ref={ref}
                      initial={{ opacity: 0, y: 20 }}
                      animate={animation}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-white rounded-full p-3">
                        {feature.icon && (
                          <FontAwesomeIcon
                            icon={feature.icon}
                            size="2x"
                            color="green"
                            className="text-green-600 font-bolder rounded-full"
                          />
                        )}
                      </div>
                      <div>
                        <h1 className="font-semibold text-[20px] lg:text-[25px]">
                          {feature.title}
                        </h1>
                        <p className="mt-4 text-[12px] lg:text-[15px]">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
              <div className="flex justify-center mt-6">
                <Link to="/services">
                  <button className="button button-lg bg-transparent border-2 border-green-500 font-bold p-3 m-2 rounded-md cursor-pointer text-green-800 relative overflow-hidden transition-colors duration-500 hover:bg-green-500 hover:text-white flex items-center">
                    <span className="mr-2 text-sm">Our Services</span>
                    <FiChevronRight />
                    <div className="absolute inset-0 bg-green-500 opacity-0 transition-opacity hover:opacity-10"></div>
                    <div className="absolute inset-0 bg-green-500 opacity-0 hover:opacity-100 hover:bg-opacity-50 animate-flash"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mb-[100px]">
            <a
              href="https://api.whatsapp.com/send?phone=1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-12 right-10 text-green-500 hover:text-green-600"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                className="text-green-500 hover:text-green-600"
              />
            </a>

            <a
              href="https://www.instagram.com/your_instagram_account"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-20 right-10 text-green-500 hover:text-green-600"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-green-500 hover:text-green-600"
              />
            </a>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Home;
