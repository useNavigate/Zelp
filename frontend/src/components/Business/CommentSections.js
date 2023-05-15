import { useState,useEffect } from "react";
import "./business.css";
import FixedStarRating from "../StarRating/FixedStarRating";
const CommentSections = ({ review }) => {



// debugger
  useEffect(()=>{},[review])
    if (review === undefined || review === null || review.length === 0) {
      return null;
    }
  return (
    <div>
      <div className="authorProfile">
        <div className="userInfoComment">
          {review?.avatarUrl ? (
            <div
              className="userProfilePicURL"

               style={{
                 backgroundImage:`url(${review?.avatarUrl})`,
                backgroundSize: "cover",
                backgroundPosition:"center",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border:"1px solid rgba(0,0,0,0.2)"
                // boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.5)",
             }}></div>
          ) : (
            <i className="fa-solid fa-user" />
          )}

          {review.firstName && (
            <h1>
              {review?.firstName} {review?.lastName[0]}
            </h1>
          )}
        </div>

        <div className="ratingDate">
          <FixedStarRating rating={review?.rating} />

          <h1>{review?.createdAt?.split("T")[0].split("-").join("/")}</h1>
        </div>
        <p className="commentReviewBodyP">{review?.body}</p>
        <div className="ReviewPicDiv">
          {review?.imageUrls?.map((url) => {
            return (
              <div
                className="userReviewPictures"
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                }}
                key={url}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommentSections;
