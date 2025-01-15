import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import GoogleInput from "../../../Components/Reusables/GoogleInput";
import GoogleInputTextArea from "../../../Components/Reusables/GoogleInputTextArea";
import { useAuthenticatedUser } from "../../../Authentication/AuthUserContext/AuthenticatedUserContext";
import AxiosPublicInstance from "../../../Authentication/AxiosInstances/AxiosPublicInstance";
import AxiosPrivateInstance from "../../../Authentication/AxiosInstances/AxiosPrivateInstance";
import SuccessDialog from "../../../Components/Reusables/Dialogs/SuccessDialog";

const ReviewForm = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const { authenticatedUser } = useAuthenticatedUser();
  //Dialog states
  const [isDialog, setIsDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogType, setDialogType] = useState("");

  const handleCloseSuccess = () => {
    setIsDialog(false);
  };

  const [review, setReview] = useState({
    rating: 0,
    name: "",
    summary: "",
    message: "",
  });

  console.log("productId:", productId);

  // Update the rating in the review state
  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
    setReview((prevState) => ({
      ...prevState,
      rating: currentRating,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const SubmitReview = async (e) => {
    e.preventDefault();
    if (authenticatedUser == null) {
      setIsDialog(true);
      setDialogMessage("Please sign in to send your review");
      setDialogType("");
      return;
    } else {
      try {
        const response = await AxiosPrivateInstance.post(
          `review/add/${productId}`,
          { review }
        );
        if (response && response.data) {
          setIsDialog(true);
          setDialogMessage(response.data.message);
          setDialogType("success");
        }
      } catch (error) {
        console.log("error review:", error);
      }
    }

    console.log("review:", review);
  };

  console.log("Rating: ", rating);
  return (
    <form className="w-full h-auto space-y-2">
      <h1 className="title text-gray-600">Write a review</h1>
      <div className="flex justify-start items-center">
        <p>Are you satisfied enough?</p>
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => handleRatingChange(currentRating)}
                  className="hidden"
                />
                <FaStar
                  className="star cursor-pointer"
                  size={20}
                  color={
                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <GoogleInput
            placeholder={"Name"}
            name="name"
            value={review.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <GoogleInput
            placeholder={"Summary"}
            name="summary"
            value={review.summary}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <GoogleInputTextArea
            placeholder={"Review"}
            name="message"
            value={review.message}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="button" onClick={SubmitReview}>
            Submit review
          </button>
        </div>
      </div>
      {isDialog && (
        <SuccessDialog
          onClose={handleCloseSuccess}
          message={dialogMessage}
          type={dialogType}
        />
      )}
    </form>
  );
};

export default ReviewForm;
