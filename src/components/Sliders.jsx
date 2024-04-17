import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import Slide1 from "../images/slide1.jpg";
import Slide2 from "../images/slide2.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles/HomeStyle.css";

export default function AnimatedSlider() {
  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
    },
  };

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
    exit: { opacity: 0, y: -20 },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          prevArrow: <PrevArrowMobile />,
          nextArrow: <NextArrowMobile />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          prevArrow: <PrevArrowMobile />,
          nextArrow: <NextArrowMobile />,
        },
      },
    ],
  };

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <FiChevronLeft
        className={`${className} absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-0 rounded-full cursor-pointer z-10`}
        onClick={onClick}
      />
    );
  }

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <FiChevronRight
        className={`${className} absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-0 rounded-full cursor-pointer z-10`}
        onClick={onClick}
      />
    );
  }

  function PrevArrowMobile(props) {
    const { className, onClick } = props;
    return (
      <FiChevronLeft
        className={`${className} absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-0 rounded-full cursor-pointer z-10`}
        onClick={onClick}
      />
    );
  }

  function NextArrowMobile(props) {
    const { className, onClick } = props;
    return (
      <FiChevronRight
        className={`${className} absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-0 rounded-full cursor-pointer z-10`}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="relative max-w-screen-xl mx-auto">
      <Slider {...settings} initialSlide={1}>
        <motion.div
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src={Slide1}
            alt=""
            className="object-fit max-w-full w-full h-[100vh] z-0"
          />
          <div className="absolute top-0 left-0 w-full h-[100vh] bg-gray-800 bg-opacity-10 opacity-100  flex flex-col justify-center items-center align-top">
            <motion.h1
              className="text-white font-bold text-center text-[25px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl z-10 w-[40%] transform capitalize leading-tight"
              variants={textVariants}
            >
              Redefining Hospitality <br /> Through Exceptional Experience.
            </motion.h1>
            <div className="mt-4 w-10 h-1 rounded-lg bg-green-400"></div>

            <motion.h2
              className="text-white mt-[40px] text-center text-[12px] sm:text-1xl md:text-1xl lg:text-[20px] xl:text-2xl z-10 w-full leading-tight"
              variants={textVariants}
            >
              Deluxe Rooms Starting At ₦45,000
              <div className="flex justify-center items-center">
                <div className="mt-4">
                  <Link to="/services">
                    <button className="button button-lg bg-transparent border-2 border-green-500 font-bold p-3 m-2 rounded-md cursor-pointer text-green-500 relative overflow-hidden transition-colors duration-500 hover:bg-green-500 hover:text-white flex items-center animate-flash">
                      <span className="mr-2 text-sm">Our Services</span>
                      <FiChevronRight />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.h2>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src={Slide2}
            alt=""
            className="object-fit max-w-full max-h-[100vh] w-full h-[100vh] z-0"
          />
          <div className="absolute top-0 left-0 w-full h-[100vh] bg-gray-800 bg-opacity-10 opacity-100 transform uppercase flex flex-col justify-center items-center"></div>
        </motion.div>
      </Slider>
    </div>
  );
}
