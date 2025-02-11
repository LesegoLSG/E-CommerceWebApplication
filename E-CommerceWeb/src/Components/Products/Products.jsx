import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFilter } from "react-icons/fa";
import ProductCard from "./ProductCard";
import Pagination from "../Reusables/Pagination";
import { useProducts } from "../../Context/ProductContext";
import { useLoading } from "../../Context/LoadingContext";
import LoadingSpinner from "../Reusables/LoadingSpinner/LoadingSpinner";

const Products = () => {
  const { products, setProducts } = useProducts();
  const { isLoading, setIsLoading } = useLoading();
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:9191/api/v1/products/all"
        );
        const data = response.data.data;
        setProducts(data);
        setFilteredItems(data); // Initialize filteredItems with the fetched data
        console.log("message: ", response.data.message);
        console.log("data:", response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(data.response.message);
      }
    };
    fetchProducts();
  }, []);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products per page

  //   filter by category
  const filterProducts = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when filtering
  };
  // show all the products
  const showAllProducts = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
    setCurrentPage(1); // Reset to the first page
  };

  //   sortOption filtering
  const handleSortOption = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Low-High":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "High-Low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1); // Reset to the first page
  };

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredItems.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className="max-w-screen-2xl  container mx-auto xl:px-28 px-4 mb-12"
      id="shopping"
    >
      {isLoading && <LoadingSpinner />}
      <h2 className="h1">Shop Our Awesome Products</h2>

      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* Filter buttons (Category) */}

          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAllProducts}>All Products</button>
            <button onClick={() => filterProducts("Jewellery")}>
              Jewelley
            </button>
            <button onClick={() => filterProducts("Bags")}>Bags</button>
            <button onClick={() => filterProducts("Shoes")}>Shoes</button>
            <button onClick={() => filterProducts("Clothing")}>Clothing</button>
          </div>
          {/* Filter */}
          <div className="flex justify-end mb-4 items-center">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortOption(e.target.value)}
              value={sortOption}
              className="bg-black text-white p-1.5 "
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Low-High">Low-High</option>
              <option value="High-Low">High-Low</option>
            </select>
          </div>
        </div>

        {/* Product List */}
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center justify-center gap-12 shadow-sm">
          {currentProducts.map((productItem) => (
            <ProductCard key={productItem.id} productItem={productItem} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredItems.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Products;
