import React from "react";

const GoogleInputTextArea = ({
  placeholder,
  value,
  onChange,
  type = "text",
  name,
}) => {
  return (
    <div className="relative w-full ">
      {/* Input field */}
      <textarea
        type={type}
        className="w-full border-2 border-gray-300 text-lg px-4 py-2 rounded outline-none hover:border-gray-600
        focus:border-gray-800 transition-colors peer bg-inherit duration-200 h-64"
        placeholder=" "
        value={value}
        onChange={onChange}
        name={name}
        required
      />
      {/* Floating label */}
      <label
        className={`absolute left-4 top-0 -translate-y-1/2 text-gray-500 text-md bg-white px-1 
        peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-500
        peer-placeholder-shown:top-5 peer-placeholder-shown:-translate-y-1/2
        peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-gray-500 peer-focus:-translate-y-0
        peer-valid:top-[-12px] peer-valid:text-sm peer-valid:text-blue-500 peer-valid:-translate-y-0
        transition-all duration-300 pointer-events-none `}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default GoogleInputTextArea;
