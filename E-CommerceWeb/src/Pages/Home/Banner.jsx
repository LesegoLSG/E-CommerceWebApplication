import React from "react";
import BannerImg from "../../assets/BannerImg.png";

const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px-28">
      <div className="py-28 flex flex-col-reverse md:flex-row justify-between items-center gap-14">
        {/* Text Main*/}
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explore our shop with different collections and brandings
            here.
          </p>
          <button className="button">Explore</button>
        </div>
        {/* Image Main */}
        <div className="md:w-1/2">
          <img src={BannerImg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
