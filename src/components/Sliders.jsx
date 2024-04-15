import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Imported icons

import Slide1 from "../images/slide1.jpg";
import Slide2 from "../images/slide2.jpg";
// import Slide3 from "../images/slide3.jpg";
// import Slide4 from "../images/slide4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        className={`${className} absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-1 rounded-full cursor-pointer z-10`}
        onClick={onClick}
      />
    );
  }

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <FiChevronRight
        className={`${className} absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-1 rounded-full cursor-pointer z-10`}
        onClick={onClick}
      />
    );
  }

  function PrevArrowMobile(props) {
    const { className, onClick } = props;
    return (
      <FiChevronLeft
        className={`${className} absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-1 rounded-full cursor-pointer z-10`}
        onClick={onClick}
      />
    );
  }

  function NextArrowMobile(props) {
    const { className, onClick } = props;
    return (
      <FiChevronRight
        className={`${className} absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-1 rounded-full cursor-pointer z-10`}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="relative max-w-screen-xl mx-auto">
      <Slider {...settings}>
        <motion.div
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src={Slide1}
            alt=""
            className="object-fit max-w-full max-h-[100vh] w-full h-full"
          />
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
            className="object-fit max-w-full max-h-[100vh] w-full h-full"
          />
        </motion.div>
      </Slider>
    </div>
  );
}
