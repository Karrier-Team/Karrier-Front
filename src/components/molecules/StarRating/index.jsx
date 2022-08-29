import { useState } from "react";
import { Rating } from "react-simple-star-rating";
// import API from "apis"

const StarRating = ({ star }) => {
  const [rating, setRating] = useState(0); // initial rating value

  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <Rating
      initialValue={star}
      onClick={handleRating}
      ratingValue={rating}
      allowHalfIcon
      // onClick={() => console.log("별점등록완료")}
    />
  );
};

export default StarRating;
