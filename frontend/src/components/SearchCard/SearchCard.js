import { Link } from "react-router-dom";
import "./searchCard.css";
import FixedStarRating from "../StarRating/FixedStarRating";

const SearchCard = (biz) => {
  const price =
    biz?.biz?.priceRange <= 10 ? "$" : biz?.biz?.priceRange < 50 ? "$$" : "$$$";
  return (
    <Link to={`/business/${biz.biz.id}`} className="searchCardLink">
      <ul>
        <li
          className="searchCardImage"
          style={{
            backgroundImage: `url(${biz.biz.photo})`,
            backgroundSize: "cover",
          }}
        ></li>

        <li className="searchName">
          {biz.index+1+" "}
          {biz.biz.name}
        </li>
        <li className="starRatingDiv">
          <FixedStarRating rating={biz.biz.rating} />
          <p>{biz.biz.reviews.length}</p>
          <p>{price}</p>
        </li>
        <div className="categoryDiv">
          <span className="searchCardCategory">{biz.biz.category}</span>•
          <span>{biz.biz.city}</span>
        </div>
        <li>
          <span>open</span> until 9 PM
        </li>
        {biz.reviews && (
          <li className="commentList">
            <i className="fa-regular fa-comment"></i>
            <span className="commentBody">{biz.reviews?.body}</span>
          </li>
        )}
      </ul>
    </Link>
  );
};

export default SearchCard;
