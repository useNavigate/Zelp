import "./starRating.css";
import { Link } from "react-router-dom";

const FixedStarRating = ({ rating }) => {

  return (

    <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        i += 1;
        return (
          <span key={i + 99} className={i <= rating ? "on" :"off"}>
            <i className="fa-solid fa-star"></i>
          </span>
        );
      })}
    </div>
  );
};

export default FixedStarRating;
