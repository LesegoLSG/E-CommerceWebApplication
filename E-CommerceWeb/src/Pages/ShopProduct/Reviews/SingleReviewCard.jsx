import React from "react";
import { FaStar } from "react-icons/fa";

const SingleReview = ({ review }) => {
  // Testing data list
  // const ratingList = [
  //   {
  //     rating: 5,
  //     name: "Thabo Dlamini",
  //     summary: "Exceeded expectations",
  //     message:
  //       "The product delivered more than I anticipated. Highly recommend!",
  //   },
  //   {
  //     rating: 4,
  //     name: "Nomvula Nkosi",
  //     summary: "Very reliable",
  //     message:
  //       "I’ve been using it for a week, and it works smoothly. A few minor issues but nothing major.",
  //   },
  //   {
  //     rating: 3,
  //     name: "Kagiso Molefe",
  //     summary: "Decent but could improve",
  //     message:
  //       "It gets the job done, but there are some areas that need improvement.",
  //   },
  //   {
  //     rating: 2,
  //     name: "Bongani Zulu",
  //     summary: "Not as expected",
  //     message:
  //       "The product didn’t perform as well as I had hoped. Some features don’t work consistently.",
  //   },
  //   {
  //     rating: 1,
  //     name: "Palesa Moeketsi",
  //     summary: "Disappointing",
  //     message:
  //       "Unfortunately, this product didn’t work for me at all. I wouldn’t recommend it.",
  //   },
  // ];

  return (
    <div className="w-full h-auto space-y-4">
      <hr />
      <p>
        Review by <span className="font-semibold">{review.name}</span>
      </p>
      <div className="flex text-yellow-500">
        {[...Array(5)].map((_, starIndex) => {
          const currentRating = starIndex + 1;
          return (
            <FaStar
              key={starIndex}
              size={20}
              color={currentRating <= review.rating ? "#ffc107" : "#e4e5e9"}
            />
          );
        })}
      </div>
      <div className="w-full">
        <h3 className="h4">{review.summary}</h3>
      </div>
      <div className="w-full h-auto">
        <p>{review.message}</p>
      </div>
      <hr />
    </div>
  );
};

export default SingleReview;
