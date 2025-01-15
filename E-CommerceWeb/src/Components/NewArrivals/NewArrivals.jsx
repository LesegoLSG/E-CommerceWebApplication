import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "../Products/ProductCard";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("ProductsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const newArrivals = products.filter((item) => item.status == "New Arrival");
  console.log("New arrivals:", newArrivals);
  return (
    <section
      className="max-w-screen-2xl h-auto container mx-auto xl:px-28 px-4 my-4"
      id="new-arrivals"
    >
      <div className="text-center">
        <h2 className="h1">Our New Arrivals</h2>
        <p className="text-Black capitalize md:w-2/3 mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          veniam voluptate, ducimus quia iusto voluptatibus cum ipsam laudantium
          fugiat aperiam. Omnis sequi, consectetur velit quibusdam corrupti
          facilis provident magnam nam.
        </p>

        {/* Product List */}
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center justify-center gap-12 shadow-sm">
          {newArrivals.map((productItem) => (
            <ProductCard key={productItem.id} productItem={productItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
