import React, { useEffect, useState } from "react";
import { slideImages } from "./SlideImages";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { FaBars, FaTimes } from "react-icons/fa";
import Category from "./Category";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0); //Current index for a slider
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); //toggle state

  

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 10000); // 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
    );
  };

  // Handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextSlide(),
    onSwipedRight: () => goToPreviousSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Allows swipe functionality on desktops as well (with mouse dragging)
  });

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  return (
   <>
      {/* Banner */}
      <section className="w-full flex px-12 py-4 mt-12 md:mt-28">
        {/* Left section (Categories) */}
        <div className="hidden md:flex md:w-1/6 bg-white flex-col p-4 shadow-lg">
          <h2 className="font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-orange-600">Clothing</li>
            <li className="cursor-pointer hover:text-orange-600">Shoes</li>
            <li className="cursor-pointer hover:text-orange-600">Jewellery</li>
            <li className="cursor-pointer hover:text-orange-600">Bags</li>
          </ul>
        </div>

        {/* Right section (Slider) */}
        <div className="w-full md:w-5/6 relative" {...handlers}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(${slideImages[currentIndex].image})`,
            }}
            className="w-full min-h-[18rem] bg-center bg-cover rounded"
          ></motion.div>

          {/* slider dots */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex">
            {slideImages.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  currentIndex === slideIndex ? "text-white" : "text-gray-400"
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Featured Brands Section */}
      {/* <Category/> */}
    </>
  );
};

export default Banner;
