import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import SingleReviewCard from "./SingleReviewCard";
import ReviewForm from "./ReviewForm";

const ShopProductReviews = ({
  selectedProduct,
  id,
  reviewFormRef,
  openReviewSection,
}) => {
  const [shopReviewsToggle, setShopReviewsToggle] = useState(openReviewSection);
  const [reviewList, setReviewList] = useState(null);

  // Set the review list only when the selectedProduct is available and has reviews
  useEffect(() => {
    if (selectedProduct && selectedProduct.reviews) {
      setReviewList(selectedProduct.reviews);
    }
  }, [selectedProduct]); // This effect runs when selectedProduct changes

  // Open the review section when triggered
  useEffect(() => {
    if (openReviewSection) {
      setShopReviewsToggle(true);
    }
  }, [openReviewSection]);

  return (
    <div className="border p-2 mb-6 rounded-lg cursor-pointer">
      <div
        className="flex justify-start items-center gap-x-2"
        onClick={() => setShopReviewsToggle(!shopReviewsToggle)}
      >
        {shopReviewsToggle ? (
          <FaTimes size={15} className="cursor-pointer" />
        ) : (
          <FaPlus size={15} className="cursor-pointer" />
        )}
        <h3 className="h4">REVIEWS</h3>
      </div>

      <div className={`${shopReviewsToggle ? "" : "hidden"} space-y-4 mt-4`}>
        <div className="space-y-4">
          <h1 className="title text-gray-600">Customer Reviews</h1>
          <h1>4.9 / 225 Reviews</h1>
          {reviewList && reviewList.length > 0 ? (
            reviewList.map((review, index) => (
              <SingleReviewCard key={index} review={review} />
            ))
          ) : (
            <p className="h2">No reviews available.</p>
          )}
        </div>
        <div className="w-full flex justify-end items-center">
          <p>View all/more</p>
        </div>
        {/* Review form */}
        <div ref={reviewFormRef}>
          <ReviewForm productId={id} />
        </div>
      </div>
    </div>
  );
};

export default ShopProductReviews;
