import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestReviews } from "../../store/review";

import ReviewCard from "./ReviewCard";
import "./reviewCard.css";
import Loading from "../Utils/Loading";
const Reviews = () => {
  const dispatch = useDispatch();

  const reviews = useSelector((state) =>
    Object.values(state.review).sort((a, b) => b.id - a.id)
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchLatestReviews()).then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <>
      <h1 className="header">Recent Activity</h1>
      <div className="reviewWrapper">
        {reviews.map((review, i) => (
          <ReviewCard key={`review_${i}`} review={review} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
