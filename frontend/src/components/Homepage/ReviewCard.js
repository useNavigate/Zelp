import "./reviewCard.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import FixedStarRating from "../StarRating/FixedStarRating";
  import AOS from "aos";
  import "aos/dist/aos.css";
const ReviewCard = ({ review }) => {
    useEffect(() => {
      AOS.init({
        once: false,
      });
      AOS.refresh();
    }, []);

  if (!review) {
    return null;
  }

  return (
    <div className="reviewCardHolder"
            data-aos="fade-up"
        data-aos-offset="300"
         >
      <ul className="cardUl">
        <li className="profileHolder">
          {review?.userAvatar ? (
            <div
              className="userProfilePicURL"
              style={{
                backgroundImage: `url(${review.userAvatar})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid rgba(0,0,0,0.2)",
                // boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.5)",
              }}
            ></div>
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
            }}
          ></li>
        ) : (
          <li
            className="reviewPicture"
            style={{
              backgroundImage: `url(https://cdn.discordapp.com/attachments/952591530626023464/1103138053075255326/image.png)`,
              backgroundSize: "cover",
            }}
          ></li>
        )}
        {/* <ul style={{width:"100%"}}> */}
        <Link to={`/business/${review.businessId}`}>
          <li
            className="bizName"
            style={{ marginLeft: "12px", marginRight: "12px" }}
          >
            {review.businessName}
          </li>
        </Link>
        <FixedStarRating
          rating={review.rating}
          styles={{ marginLeft: "12px" }}
        />
        <li className="reviewBody">
          <p>{review.body}</p>
        </li>
        {/* <li className="reviewBottom">asdasd</li> */}
      </ul>
      {/* </ul> */}
    </div>
  );
};

export default ReviewCard;
