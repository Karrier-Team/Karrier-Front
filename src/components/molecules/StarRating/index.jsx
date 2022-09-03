import { useState } from "react";
import { Rating } from "react-simple-star-rating";
// import API from "apis"

const StarRating = ({ star, setStars }) => {
  const [rating, setRating] = useState(0); // initial rating value

  const handleRating = (rate) => {
    setRating(rate);
    setStars(rate);
    // other logic
  };

  return (
    <Rating
      initialValue={star}
      onClick={handleRating}
      ratingValue={rating}
      allowHalfIcon
    />
  );
};

export default StarRating;
