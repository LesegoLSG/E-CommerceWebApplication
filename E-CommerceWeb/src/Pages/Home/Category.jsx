import React,{useRef} from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import chopard from "../../assets/BrandLogo/chopard.png";
import nike from "../../assets/BrandLogo/nike.png";
import adidas from "../../assets/BrandLogo/adidas.png";
import BUCCELLATI from "../../assets/BrandLogo/BUCCELLATI.png";
import puma from "../../assets/BrandLogo/puma.png";
import MainDisplayImage from "../../assets/MainDisplayProductImages/MainDisplayImage.jpg";
import fashionableShoes from "../../assets/MainDisplayProductImages/fashionableShoes.jpg";
import MainNecklace from "../../assets/MainDisplayProductImages/MainNecklace.jpg";
import MainBag from "../../assets/MainDisplayProductImages/MainBag.jpg";
import VariousProducts from "../../assets/MainDisplayProductImages/VariousProducts.jpg";
import {headerVariant,cardVariant} from "../../Components/Reusables/Variants/AnimationVariants"
import brand from "./FeaturedBrandData"

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

   const sliderRef = useRef(); // Creating a reference for the slider container

  return (
    <section className="w-full" >
      {/* Container for the entire section with padding */}
      <div className="px-4 sm:px-6 lg:px-4">
        <motion.div
          className="text-start"
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
        >
          {/* Section heading */}
          <h1 className="h1">Trusted by</h1>
          <p className="mt-2 subtitle">
            We are proud to be associated with these esteemed companies
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="flex items-center justify-center mt-12 scrollbar-hide">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {/* Slider content with horizontal scrolling */}
            {brand.map((branding, index) => (
              <motion.div
                className="flex-shrink-0 p-4 snap-start"
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariant(index)}
              >
                {/* Brand logo */}
                <img
                  src={branding.logo}
                  alt={branding.name}
                  className="h-24 object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
