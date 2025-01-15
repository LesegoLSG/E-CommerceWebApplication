import React from "react";

const Thumbnail = ({ image, isActive, onClick }) => {
  return (
    <div
      className={`cursor-pointer border-2 p-1 rounded-md ${
        isActive ? "border-blue-500" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <img src={image} alt="Thumbnail" className="w-20 h-20 object-cover" />
    </div>
  );
};

export default Thumbnail;
