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

const SimilarProducts = ({ category, productList }) => {
  const similarProducts = productList.filter(
    (item) => item.category == category
  );

  return (
    <section className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="text-center">
        <h2 className="title">Similar Products</h2>
        <p className="text-Black capitalize md:w-2/3 mx-auto mb-8">
          Here are some of the {category} you might Love.
        </p>

        {/* Best seller Slider */}
        <div className="mb-16 ">
          <Swiper
            // slidesPerView={4}
            // spaceBetween={30}

            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {similarProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard productItem={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
