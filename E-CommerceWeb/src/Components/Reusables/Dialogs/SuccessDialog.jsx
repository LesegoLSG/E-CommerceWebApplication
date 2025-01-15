import React from "react";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const SuccessDialog = ({ message, onClose, type }) => {
  const handleClose = (e) => {
    if (e.target.id == "success-container") {
      onClose();
    }
  };
  return (
    <div
      id="success-container"
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-1/3 flex flex-col justify-center items-center gap-2">
        {type === "success" ? (
          <TiTick className="text-green-600" size={30} />
        ) : type === "error" ? (
          <RxCross1 className="text-red-600" size={30} />
        ) : (
          <div className="h-8 w-8" /> // Empty div to maintain layout
        )}
        <p className="text-gray-600 mb-6">{message}</p>
      </div>
    </div>
  );
};

export default SuccessDialog;
