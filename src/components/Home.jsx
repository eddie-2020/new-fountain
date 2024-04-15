import React from "react";

import AnimatedSlider from "./Sliders";
import { new_fountain_db } from "../data";

const Home = () => {
  return (
    <div className="mb-[100px]">
      <div className="text-center mt-[70px]">
        <div className="h-[100vh]">
          <AnimatedSlider />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {new_fountain_db.map((data, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 cursor-pointer"
            >
              <h1 className="text-xl font-semibold">{data.name}</h1>
              <h3 className="text-gray-600">{data.room_details}</h3>
              <p className="text-gray-800">{data.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
