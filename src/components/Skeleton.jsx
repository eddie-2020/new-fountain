import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-3">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div
          key={index}
          className="bg-gray-200 animate-pulse shadow-md p-4 m-2"
        >
          <div className="bg-gray-300 h-40 lg:h-60"></div>
          <div className="bg-gray-300 h-6 mt-3"></div>
          <div className="bg-gray-300 h-4"></div>
          <div className="bg-gray-300 h-4"></div>
          <div className="bg-gray-300 h-4"></div>
          <div className="bg-gray-300 h-10 w-1/2 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
