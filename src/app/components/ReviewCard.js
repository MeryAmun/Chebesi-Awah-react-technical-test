import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="review__card">
      <div className="review__cardRating">
        {review?.rating?.map((item, index) => (
          <img src={item} alt="" key={index} />
        ))}
      </div>
      <p className="review__cardComment">{review?.comment}</p>
      <div className="review__cardFooter">
        <div className="review__cardImage">
          <img src={review?.image} alt="" />
        </div>
        <div className="review__cardDetails">
          <p className="review__cardName">{review?.name}</p>
          <p className="review__cardPosition">{review?.position}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
