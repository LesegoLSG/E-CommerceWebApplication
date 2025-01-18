import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SimilarProducts from "./SimilarProducts";

import { useProducts } from "../../Context/ProductContext";
import MainBag from "../../assets/MainDisplayProductImages/MainBag.jpg";
import ShopProductInfo from "./ProductInfo/ShopProductInfo";
import ShopProductDetails from "./ProductDetails/ShopProductDetails";
import ShopProductReviews from "./Reviews/ShopProductReviews";
import ShopProductMainInfo from "./MainProductInfo/ShopProductMainInfo";
import Gallery from "./Gallery/Gallery";
import AxiosPublicInstance from "../../Authentication/AxiosInstances/AxiosPublicInstance";

const ShopProduct = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Define your backend's base URL here
  const backendBaseUrl = "http://localhost:9191";

  useEffect(() => {
    // Find the product with the matching id
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    if (foundProduct) {
      setSelectedProduct(foundProduct);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (!selectedProduct) {
    return <p>Loading product...</p>; // Return a loading state or a message if the product isn't found yet
  }

  // Ensure images array exists before passing it to Gallery
  const imageUrls = selectedProduct.images
    ? selectedProduct.images.map(
        (image) => `${backendBaseUrl}${image.downloadUrl}`
      )
    : [];

  const imageList = [
    "https://via.placeholder.com/300", // Replace with actual image URLs
    "https://via.placeholder.com/301",
    "https://via.placeholder.com/302",
    "https://via.placeholder.com/303",
  ];

  return (
    <section className=" max-screen-2xl container mx-auto xl:px-28 px-2" id="">
      <div className="p-3 max-w-7xl m-auto">
        <div>
          <a href="/" className="text-gray-800">
            Home
          </a>
          <a href="#" className="text-Black font-semibold">
            /Shop
          </a>
        </div>
        <div className="w-full min-h-screen flex flex-col md:flex-row  my-4">
          {/* image section */}
          <div className="w-full md:w-1/3 h-auto space-y-2 md:sticky top-2 self-start">
            <Gallery images={imageUrls} />
          </div>
          {/* Information Section */}
          <div className="w-full md:w-2/3 h-auto md:px-6 space-y-6">
            {/* Main Information component */}
            <ShopProductMainInfo selectedProduct={selectedProduct} />
            {/* Information Component */}
            <ShopProductInfo selectedProduct={selectedProduct} />
            {/* Details Component */}
            <ShopProductDetails selectedProduct={selectedProduct} />
            {/*Reviews*/}
            <ShopProductReviews selectedProduct={selectedProduct} id={id} />
          </div>
        </div>
      </div>
      {/* <SimilarProducts
        category={selectedProduct.category.name}
        productList={allProducts}
      /> */}
    </section>
  );
};

export default ShopProduct;
