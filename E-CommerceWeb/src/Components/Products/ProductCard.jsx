import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productItem }) => {
  const finalProductPrice = () => {
    if (productItem.sale != 0 && productItem.sale != null) {
      return productItem.price - (productItem.price * productItem.sale) / 100;
    } else {
      return productItem.price;
    }
  };
  return (
    <div className="w-full relative">
      <Link to={`/shop/${productItem.id}`}>
        <div className="w-full h-72 overflow-hidden">
          <img
            src={productItem.image}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 "
          />
        </div>
      </Link>
      <div>
        <h4 className="text-base font-semibold mb-2">{productItem.title}</h4>
        <div className="flex justify-between">
          <p className="text-black/50">{productItem.category}</p>
          <p className="font-bold"> R{finalProductPrice()}</p>
        </div>
      </div>
      {/* sale display */}
      {productItem.sale > 0 && (
        <div className="bg-Black w-auto h-auto absolute top-0 left-0 p-1 ">
          <h2 className="text-white">SALE</h2>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
