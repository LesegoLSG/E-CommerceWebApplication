import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const ShopProductInfo = () => {
  const [shopInfoToggle, setShopInfoToggle] = useState(false);
  return (
    <div className="border p-2 mb-6 rounded-lg cursor-pointer">
      <div
        className="flex justify-start items-center gap-x-2"
        onClick={() => setShopInfoToggle(!shopInfoToggle)}
      >
        {shopInfoToggle ? (
          <FaTimes size={15} className="cursor-pointer" />
        ) : (
          <FaPlus size={15} className="cursor-pointer" />
        )}
        <h3 className="h4">INFORMATION</h3>
      </div>

      <div className={`${shopInfoToggle ? "" : "hidden"} space-y-4 mt-4`}>
        <div className="w-[30%] grid grid-cols-2 grid-rows-5 ">
          <p className="font-semibold">Name:</p>
          <p>T-Shirt</p>
          <p className="font-semibold">Brand:</p>
          <p>Adidas</p>
          <p className="font-semibold">Category:</p>
          <p>Clothing</p>
          <p className="font-semibold">Activity:</p>
          <p>Sport</p>
          <p className="font-semibold">Gender:</p>
          <p>Unisex</p>
        </div>
      </div>
    </div>
  );
};

export default ShopProductInfo;
