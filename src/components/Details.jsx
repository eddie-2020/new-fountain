import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { useParams, Link } from "react-router-dom";
import { new_fountain_db } from "../data";
import { FiChevronLeft } from "react-icons/fi";

const Details = () => {
  const { id } = useParams();
  const roomId = parseInt(id);
  const room = new_fountain_db.find((room) => room.id === roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="mt-[70px] mb-[70px]">
      <Navbar />
      <Link
        to="/"
        className="flex items-center mb-4 text-gray-800 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"
      >
        <FiChevronLeft className="h-6 w-6 mr-2" /> Back
      </Link>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="relative lg:mr-8 lg:ml-8 m-2">
            <img
              src={room.image}
              alt={room.name}
              className="w-auto h-auto mb-4 lg:mb-0 "
              style={{ maxWidth: "100%" }}
            />
            <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-tr-md rounded-bl-md text-xs font-bold">
              ₦{room.price}
            </span>
          </div>
          <div className="ml-0 lg:ml-8">
            <h1 className="text-2xl font-semibold">{room.name}</h1>
            <h3 className="text-lg text-gray-600">{room.room_details}</h3>
            <p className="text-lg font-semibold text-green-500">
              {room.booking_rate}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
