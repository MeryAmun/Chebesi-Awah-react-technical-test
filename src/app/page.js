"use client";
import { useEffect, useState } from "react";
import ReviewCard from "./components/ReviewCard";

export default function ReviewPage() {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response?.json())
        .then((data) => {
          setReviews(data?.reviews);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="reviews">
      <div className="left__gradient" />
      <div className="right__gradient" />
      <div className="reviews__header">
        <h1>Reviews</h1>
      </div>
      <div className="reviews__container">
        {reviews?.map((review) => (
          <ReviewCard key={review?.id} review={review} />
        ))}
      </div>
    </div>
  );
}
