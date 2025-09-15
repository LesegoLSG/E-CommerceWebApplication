import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const ShopByCategoryMenu = ({ categories, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
 
        
    <div className="w-1/6 h-auto relative">
                {/* Toggle button for small screens */}
                <div className="bg-neutral-900 w-full h-full flex flex-row justify-between items-center px-2 rounded-sm">
                    <h2 className="text-md font-bold">Shop by Category</h2>
                    <button onClick={() => setIsOpen((prev) => !prev)} className="">
                    {isOpen ? (
                        <FaTimes className="w-4 h-4 text-gray-800" />
                    ) : (
                        <FaBars className="w-4 h-4 text-gray-800" />
                    )}
                    </button>
                </div>

            {/* Category list */}
            {isOpen && (
                    <div
                        className="absolute left-0 top-full mt-2 w-64 bg-white p-4 rounded-lg shadow-lg z-50"
                    >
                    <ul className="space-y-3">
                     {categories.map((category) => (
                     <li
                    key={category.id}
                    className="cursor-pointer hover:bg-green-100 p-2 rounded-lg text-gray-900 font-semibold transition"
                    onClick={() => {
                    scrollToSection(category.id);
                    setIsOpen(false); // close menu after selecting (on mobile)
                    }}
                >
                    {category.name}
                </li>
                ))}
                </ul>
                </div>
            )}
    </div>
  );
};

export default ShopByCategoryMenu;
