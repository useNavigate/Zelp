import csrfFetch from "./csrf";
import { RECEIVE_BUSINESS, receiveBusiness } from "./business";
const RECEIVE_REVIEWS = "review/reviews";
export const RECEIVE_REVIEW = "review/review";
const RECEIVE_LATEST_REVIEWS = "review/latestReview";
export const REMOVE_REVIEW = "review/remove";
const RECEIVE_UPDATE_REVIEW = "review/receiveUpdate";
const REMOVE_REVIEW_IMAGE="review/delete_image"

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const receiveLatestReviews = (reviews) => ({
  type: RECEIVE_LATEST_REVIEWS,
  reviews,
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const removeReviewImage = (reviewId, imageUrl) => ({
  type: REMOVE_REVIEW_IMAGE,
  reviewId,
  imageUrl,
});
export const receiveUpdateReview = (review)=>({
  type:RECEIVE_UPDATE_REVIEW,
  review
})


export const fetchLatestReviews = () => async (dispatch) => {
  const res = await fetch("/api/reviews/latest");
  const data = await res.json();
  dispatch(receiveLatestReviews(data));
};

export const fetchReviews = () => async (dispatch) => {
  const res = await fetch("/api/reviews");
  const data = await res.json();
  dispatch(receiveReviews(data));
};

export const fetchCreateReview = (review) => async (dispatch) => {
  const { BID, userId, rating, body, firstName, lastName } = review;
  const res = await csrfFetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      business_id: BID,
      user_id: userId,
      rating,
      body,
      firstName,
      lastName,
    }),
  });

  const data = await res.json();
  dispatch(receiveReview(data));
  return res;
};

export const fetchDestroyReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json()
    // dispatch(removeReview(reviewId));
    dispatch(receiveBusiness(data))
  }
};

export const deleteReviewImage = (reviewId, imageUrl) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}/delete_image`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ images: imageUrl }),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(removeReviewImage(reviewId, data));
  }
};
const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return { ...action.business.reviews };
    case RECEIVE_REVIEWS:
      return { ...state, ...action.reviews };
    case RECEIVE_REVIEW:
      return { ...state, [action.review.id]: action.review };
    case RECEIVE_LATEST_REVIEWS:
      return { ...action.reviews };
    default:
      return { ...state };
  }
};

export default reviewReducer;
