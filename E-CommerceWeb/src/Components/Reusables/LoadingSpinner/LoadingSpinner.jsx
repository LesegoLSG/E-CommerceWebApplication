import React from "react";
import "./LoadingSpinner.css";
import { AiOutlineLoading } from "react-icons/ai";

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="loader ease-linear rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-100 text-center flex justify-center align-middle">
        <AiOutlineLoading className="text-green-600 h-14 w-14" />
      </div>
      <br></br>
      <p className="text-[#9ECAFF]">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
