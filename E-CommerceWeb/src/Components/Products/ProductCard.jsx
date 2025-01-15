import React from "react";
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import { useCart } from "../../Context/CartContext";

const ProductCard = ({ productItem }) => {
  const { addToCart } = useCart();

  const finalProductPrice = () => {
    if (productItem.sale != 0 && productItem.sale != null) {
      return productItem.price - (productItem.price * productItem.sale) / 100;
    } else {
      return productItem.price;
    }
  };

  // Safely check if images array exists and get the first image
  const productImage =
    productItem.images && productItem.images.length > 0
      ? `http://localhost:9191${productItem.images[0].downloadUrl}` // Ensure full path
      : "https://via.placeholder.com/300"; // Fallback image if no images are available

  return (
    <div className="w-full relative">
      <Link to={`/shop/${productItem.id}`}>
        <div className="w-full h-72 overflow-hidden">
          <img
            src={productImage}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 "
          />
        </div>
      </Link>
      <div>
        <div className="flex justify-between items-center">
          <h4 className="text-base font-semibold mb-2">
            {productItem.description}
          </h4>
          <p className="font-bold"> R{finalProductPrice()}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black/50">{productItem.category.name}</p>
          <div className="w-8 h-8 flex justify-center items-center bg-green-400 group text-white text-md rounded-full hover:w-32 hover:bg-green-600 transition-all">
            <span className="group-hover:hidden">+</span>
            <span
              className="hidden group-hover:block cursor-pointer"
              onClick={() => addToCart(productItem)}
            >
              Add To Cart
            </span>
          </div>
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
