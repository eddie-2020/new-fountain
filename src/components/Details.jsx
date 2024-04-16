import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { new_fountain_db, new_fountain_services } from "../data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Details = ({ isDarkMode, toggleTheme }) => {
  const { id } = useParams();
  const roomId = parseInt(id);
  const room = new_fountain_db.find((room) => room.id === roomId);
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!room) {
    return <div>Room not found</div>;
  }

  const totalImages = room.other_images.length;
  const remainingImages = totalImages - startIndex - 6;

  const prevImages = () => {
    setStartIndex((prev) => Math.max(prev - 6, 0));
  };

  const nextImages = () => {
    setStartIndex((prev) => prev + 6);
  };

  const nextPageEnabled = totalImages > 6 && remainingImages > 0;

  const isIpad = windowWidth >= 768 && windowWidth <= 1024;
  const isSmallPhone = windowWidth < 768;

  return (
    <div className="container mt-[80px] mb-[70px]">
      <Link
        to="/"
        className={`fixed top-0 mt-[100px] z-10 left-10 flex items-center p-2 rounded-full hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <FiChevronLeft className="h-6 w-6 mr-2" /> Back
      </Link>
      <div className="container mx-auto">
        {" "}
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="relative lg:mr-[100px] lg:ml-8 m-2">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full lg:h-[650px] mb-4 lg:mb-0 rounded-tr-md  rounded-tl-[25px] rounded-br-md rounded-bl-md lg:max-w-[1000px]"
            />
            <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-tr-md rounded-bl-md text-xs font-bold flex flex-col items-end">
              <span>₦{room.price}</span>
              <span className="text-[10px]">Per Night</span>
            </span>
          </div>
          <div className="m-2 lg:ml-8">
            <h1 className="text-2xl font-semibold">{room.name}</h1>
            <h3 className="text-md lg:text-lg text-gray-600">
              {room.room_details}
            </h3>
            <p className="text-sm lg:text-sm font-semibold text-green-500">
              {room.booking_rate}
            </p>
            <div
              className={`grid grid-cols-2 gap-2 md:gap-4 mt-4 ${
                isIpad || isSmallPhone ? "justify-center" : "flex-start"
              }`}
            >
              {" "}
              {room.other_images
                .slice(startIndex, startIndex + 6)
                .map((otherImage, idx) => (
                  <img
                    key={idx}
                    src={otherImage}
                    alt={`Other Image ${idx + startIndex + 1}`}
                    className={`rounded-md ${
                      isIpad || isSmallPhone
                        ? "w-full h-auto object-cover"
                        : "w-40 h-40"
                    }`}
                  />
                ))}
            </div>
            {totalImages > 6 && (
              <div className="flex justify-between items-center mt-4 m-8">
                <button
                  onClick={prevImages}
                  disabled={startIndex === 0}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                >
                  <FiChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex items-center space-x-2">
                  {Array.from(Array(Math.ceil(totalImages / 6)).keys()).map(
                    (index) => (
                      <button
                        key={index}
                        onClick={() => setStartIndex(index * 6)}
                        className={`px-3 py-1 ${
                          startIndex === index * 6
                            ? "bg-gray-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                        } rounded-md`}
                      >
                        {index + 1}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={nextImages}
                  disabled={!nextPageEnabled}
                  className={`px-3 py-1 ${
                    nextPageEnabled
                      ? "bg-gray-200 hover:bg-gray-300"
                      : "bg-gray-400"
                  } rounded-md`}
                >
                  <FiChevronRight className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Details;
