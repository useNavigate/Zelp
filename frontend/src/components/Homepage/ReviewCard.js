import "./reviewCard.css";
import { Link } from "react-router-dom";
import FixedStarRating from "../StarRating/FixedStarRating";
const ReviewCard = ({ review }) => {
  if (!review) {
    return null;
  }

  return (
    <div className="reviewCardHolder">
      <ul className="cardUl">
        <li className="profileHolder">
          {review?.userAvatar ? (
            <img
              className="userProfilePicURL"
              src={`${review.userAvatar}`}
              style={{
                objectFit: "cover",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.5)",
              }}
            />
          ) : (
            <i className="fa-solid fa-user profilePicture"></i>
          )}

          <h1>
            {review.firstName} {review.lastName[0]}.
          </h1>
        </li>
        {review?.imageUrls[0] !== undefined ? (
          <li
            className="reviewPicture"
            style={{
              backgroundImage: `url(${review.imageUrls[0]})`,
              backgroundSize: "cover",
              boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.5)",
            }}
          ></li>
        ) : (
          <li
            className="reviewPicture"
            style={{
              backgroundImage: `url(https://cdn.discordapp.com/attachments/952591530626023464/1103138053075255326/image.png)`,
              backgroundSize: "cover",
              boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.5)",
            }}
          ></li>
        )}

        <Link to={`/business/${review.businessId}`}>
          <li className="bizName">{review.businessName}</li>
        </Link>
        <FixedStarRating rating={review.rating} />
        <li className="reviewBody">
          <p>{review.body}</p>
        </li>
        <li className="reviewBottom"></li>
      </ul>
    </div>
  );
};

export default ReviewCard;
