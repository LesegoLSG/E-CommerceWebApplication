import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "./Banner";
import Category from "./Category";
import Products from "../../Components/Products/Products";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const sectionId = location.state.sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        // Use a timeout to ensure the component has fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Adjust timeout if needed
      }
    }
  }, [location]);

  return (
    <>
      <Banner />
      <Category />
      <Products />
      <NewArrivals />
    </>
  );
};

export default Home;
