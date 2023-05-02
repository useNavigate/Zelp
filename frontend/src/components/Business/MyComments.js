
import { useParams } from "react-router-dom"
import FixedStarRating from "../StarRating/FixedStarRating";
import CommentDropDown from "./CommentDropDown";
import "./business.css";
const MyComments = ({ review, business, bizId, myReview }) => {
  const { id } = useParams();

  return (
    <div className="_comments">
      <div className="authorProfile myReview">
        <h1 className="yourReview"> Your Review</h1>

        <div className="myInfoComment">
          <div className="userInfoSide">
            {review?.avatarUrl ? (
              <img
                className="userProfilePicURL"
                src={`${review.avatarUrl}`}
                width="60px"
                height="60px"
              />
            ) : (
              <i className="fa-solid fa-user" />
            )}
            <h1>
              {review.firstName} {review.lastName[0]}
            </h1>
          </div>
          <div>
            <CommentDropDown
              reviewId={review.id}
              business={business}
              bizId={bizId}
              myReview={myReview}
            />
          </div>
        </div>
        <div className="commentBody">
          <div className="ratingDate">
            <FixedStarRating rating={review?.rating} />
            <h1>{review?.createdAt?.split("T")[0].split("-").join("/")}</h1>
          </div>
        </div>
        <p className="commentReviewBodyP">{review.body}</p>
        <div className="ReviewPicDiv">
          {review?.imageUrls?.map((url, i) => {
            return (
              <div
                className="userReviewPictures"
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                }}
                key={url + i}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default MyComments
