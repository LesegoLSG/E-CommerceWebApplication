import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const ShopProductDetails = () => {
  const [shopDetailsToggle, setShopDetailsToggle] = useState(false);
  return (
    <div className="border p-2 mb-6 rounded-lg cursor-pointer">
      <div
        className="flex justify-start items-center gap-x-2"
        onClick={() => setShopDetailsToggle(!shopDetailsToggle)}
      >
        {shopDetailsToggle ? (
          <FaTimes size={15} className="cursor-pointer" />
        ) : (
          <FaPlus size={15} className="cursor-pointer" />
        )}
        <h3 className="h4">DETAILS</h3>
      </div>

      <div className={`${shopDetailsToggle ? "" : "hidden"} space-y-4 mt-4`}>
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            consequatur vitae dolores perspiciatis neque iure eveniet est
            tempore minus, deleniti fugiat deserunt, animi, quae magni! Qui odit
            ullam recusandae fuga!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopProductDetails;
