import React, { useEffect, useState } from "react";
import { slideImages } from "./SlideImages";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className=" max-w-screen-2xl min-h-[60vh] md:min-h-[70vh]  container mx-auto flex  xl:px-28 px-4 gap-x-2 mt-4">
      {/* Banner */}
      <div className="hidden md:block md:w-1/3 h-auto bg-gray-500 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Shop by Categories</h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li
              key={category.id}
              className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
              onClick={() => scrollToSection(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
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
          style={{ backgroundImage: `url(${slideImages[currentIndex].image})` }}
          className="w-full h-full bg-center bg-cover rounded duration-600"
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
    </section>
  );
};

export default Banner;
