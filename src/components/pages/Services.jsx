import React, { useState, useEffect } from "react";

import { new_fountain_services } from "../../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = ({ isDarkMode, toggleTheme }) => {
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
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="container mx-auto text-center mt-[100px] mb-[70px]">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[20px] md:text-[30px]">Our Services</h1>
          <div className="mt-2 w-10 h-1 rounded-lg bg-green-400"></div>
        </div>
        <div className="mt-[50px] m-2">
          {new_fountain_services.map((data, idx) => (
            <div key={idx}>
              <p className="text-sm lg:text-lg">{data.services}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[50px] m-5">
          <div className="container">
            {new_fountain_services.map((data, index) => (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                key={index}
              >
                {data.service_features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center mb-4 flex-col"
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={animation}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white p-3">
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
                      <h1 className="font-semibold text-[16px] lg:text-[25px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
