import React, { useEffect, useState } from "react";
import { slideImages } from "./SlideImages";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { FaBars, FaTimes } from "react-icons/fa";

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
  //Dummy data of categoies
  const categories = [
    { id: "clothing", name: "Clothing" },
    { id: "shoes", name: "Shoes" },
    { id: "jewellery", name: "Jewellery" },
    { id: "bags", name: "Bags" },
    { id: "accessories", name: "Accessories" },
  ];

  return (
    <section className=" max-w-screen-2xl h-auto md:min-h-[70vh]  container mx-auto flex   xl:px-28 px-4 gap-x-2 mt-4">
      {/* Banner */}
      <div className="w-full flex flex-col md:flex-row gap-2">
        {/* Category Section */}
        <div className="md:w-1/3 ">
          {/* Toggle button for small screens */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Shop by Category</h2>
            {/* <button
              className="text-sm text-white bg-blue-500 px-4 py-1 rounded"
              onClick={() => setIsCategoryOpen((prev) => !prev)}
            >
              {isCategoryOpen ? "Close" : "Open"}
            </button> */}
            <div
              className=""
              onClick={() => setIsCategoryOpen((prev) => !prev)}
            >
              {isCategoryOpen ? (
                <FaTimes className="w-5 h-5 text-Black" />
              ) : (
                <FaBars className="w-5 h-5 text-Black" />
              )}
            </div>
          </div>

          {/* Category list */}
          <div
            className={`${
              isCategoryOpen ? "block" : "hidden"
            } md:block p-4 rounded shadow-lg`}
          >
            <ul className="space-y-3">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="cursor-pointer hover:bg-Green p-2 rounded-lg text-[#111212] font-semibold"
                  onClick={() => scrollToSection(category.id)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="w-full md:w-full h-auto bg-gray-300  relative"
          {...handlers}
        >
          <motion.div
            key={currentIndex} // This will trigger animation on index change
            initial={{ opacity: 0 }} // Animation starts off-screen
            animate={{ opacity: 1, x: 0 }} // Animates into view
            exit={{ opacity: 0 }} // Exits off-screen
            transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
            style={{
              backgroundImage: `url(${slideImages[currentIndex].image})`,
            }}
            className="w-full h-full min-h-[16rem] bg-center bg-cover rounded duration-600"
          ></motion.div>
          {/* slider dots */}
          <div className="absolute bottom-2 left-1/2 right-1/2  flex justify-center items-center">
            {slideImages.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  currentIndex === slideIndex ? "text-white" : "text-gray-500"
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
