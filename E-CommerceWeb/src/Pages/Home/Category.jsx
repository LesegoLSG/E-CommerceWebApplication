import React from "react";
import { Link } from "react-router-dom";
import brand from "../../assets/BrandLogo/brand.jpg";
import MainDisplayImage from "../../assets/MainDisplayProductImages/MainDisplayImage.jpg";
import fashionableShoes from "../../assets/MainDisplayProductImages/fashionableShoes.jpg";
import MainNecklace from "../../assets/MainDisplayProductImages/MainNecklace.jpg";
import MainBag from "../../assets/MainDisplayProductImages/MainBag.jpg";
import VariousProducts from "../../assets/MainDisplayProductImages/VariousProducts.jpg";

const companyLogo = [
  { id: 1, image: brand },
  { id: 2, image: brand },
  { id: 3, image: brand },
  { id: 4, image: brand },
  { id: 5, image: brand },
];

const ProductDisplay = [
  {
    id: 1,
    image: MainDisplayImage,
    message:
      "Discover the latest trends in clothing with our new arrivals. Shop now and elevate your style!",
  },
  {
    id: 2,
    image: fashionableShoes,
    message:
      "Step into comfort and style with our premium collection of shoes. Find your perfect pair today!",
  },
  {
    id: 3,
    image: MainNecklace,
    message:
      "Add a touch of elegance with our exclusive jewelry pieces. Shop now for timeless accessories!",
  },
  {
    id: 4,
    image: MainBag,
    message:
      "Carry your essentials in style with our designer bags. Discover our latest collection now!",
  },
  {
    id: 5,
    image: VariousProducts,
    message:
      "Explore our diverse range of products including clothing, shoes, jewelry, and bags. Shop the best styles now!",
  },
];

const Category = () => {
  const mainImage = ProductDisplay[0]; // First item for the bigger image
  const subImages = ProductDisplay.slice(1); // Remaining items for sub images

  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      {/* Category brands */}
      <div className="flex justify-around items-center flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, image, message }) => (
          <div key={id}>
            <img src={image} alt="brand" className="w-24 h-24" />
            <p className="text-center mt-2">{message}</p>
          </div>
        ))}
      </div>

      {/* Category grid */}
      <div className="w-full mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase md:-rotate-90 text-center bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        {/* Bigger image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <Link to="/" className="relative w-full">
            <img
              src={mainImage.image}
              alt="category-image"
              className="max-w-lg max-h-96 w-full hover:scale-105 transition-all duration-300 object-cover object-top"
            />
            <p className="text-center absolute bottom-1">{mainImage.message}</p>
          </Link>
        </div>
        {/* Sub images */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
          {subImages.map(({ id, image, message }) => (
            <Link
              to="/"
              key={id}
              className="flex justify-center items-center relative"
            >
              <img
                src={image}
                alt={`category${id}-image`}
                className="max-w-xl max-h-64 w-full hover:scale-105 transition-all duration-300"
              />
              <p className="text-center absolute bottom-1 bg-white bg-opacity-75 px-2 py-1 rounded">
                {message}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
