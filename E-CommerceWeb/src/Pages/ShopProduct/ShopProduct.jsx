import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";

const ShopProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/ProductsData.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == id);
        console.log("Product:", product);
        setAllProduct(data);
        setProducts(product[0]);
      } catch (error) {
        console.log("Could not fetch data: ", error);
      }
    };
    fetchProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const { title, category, price, image, status } = products;

  return (
    <section
      className="mt-28 max-screen-2xl container mx-auto xl:px-28 px-4"
      id=""
    >
      <div className="p-3 max-w-7xl m-auto">
        <div>
          <a href="/" className="text-gray-800">
            Home
          </a>
          <a href="#" className="text-Black font-semibold">
            /Shop
          </a>
        </div>
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max ">
            {/* Image */}
            <div>
              <img src={image} alt="ShopProductImage" className="w-full" />
            </div>

            {/* Product details */}
            <div>
              <h1 className="title text-left">{title}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                fugit saepe molestias. Veniam voluptatem sit assumenda commodi
                repellendus qui eius ullam ad atque, quos quis, exercitationem
                blanditiis veritatis facere? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quod, velit nobis modi eaque
                repellat, nihil ex atque fugiat autem consectetur veniam ad odio
                sequi, ducimus culpa. Aperiam ut mollitia sequi?
              </p>
              <span className="my-2 text-xl text-yellow-500 flex items-center gap-1 sn:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <h2 className="text-xl text-Black font-semibold sm:text-2xl">
                R{price}
              </h2>
              <div>
                <div className="mt-4">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    min={1}
                    required
                    className="py-2 px-4 items-center border-Black border-2 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-lg"
                  />
                </div>
                <button className="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts category={category} productList={allProducts} />
    </section>
  );
};

export default ShopProduct;
