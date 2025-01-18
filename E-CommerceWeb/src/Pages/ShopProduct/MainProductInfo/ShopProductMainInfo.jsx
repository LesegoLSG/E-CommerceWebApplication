import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const ShopProductMainInfo = ({ selectedProduct }) => {
  return (
    <div className="w-full space-y-3">
      {/* Product main info */}
      <div className="w-full">
        <h1 className="h1">{selectedProduct?.description}</h1>
      </div>
      <div className="w-full flex items-center space-x-2">
        <div className="flex text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p>{selectedProduct?.reviews?.length ?? 0} reviews</p>

        <p className="font-semibold">Add Your Preview</p>
      </div>
      <div>
        <p className="h3">R{selectedProduct?.price ?? 0}</p>
      </div>
      <div className="space-y-2">
        <p>Color</p>
        <div className="space-x-2">
          <input type="radio" className="w-8 h-8" />
          <input type="radio" className="w-8 h-8" />
          <input type="radio" className="w-8 h-8" />
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <FaCircleMinus size={26} className="cursor-pointer" />
          1
          <FaCirclePlus size={26} className="cursor-pointer" />
        </div>
        <button className="button">Add to card</button>
      </div>
      {/* Wishlist & Share */}
      <div className="w-full flex items-center gap-x-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaHeart size={25} />
          <p className="capitalize">WISHLIST</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaShareAlt size={25} />
          <p>SHARE</p>
        </div>
      </div>
    </div>
  );
};

export default ShopProductMainInfo;
