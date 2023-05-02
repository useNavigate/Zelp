import { REMOVE_REVIEW } from "./review";

export const RECEIVE_BUSINESSES = "business/businesses";
export const RECEIVE_SEARCH_BUSINESSES = "business/searchTerm";
export const RECEIVE_BUSINESS = "business/business";
export const RECEIVE_UNREVIEWED_BUSINESS = "business/unreviewed";
export const RECEIVE_BUSINESS_RATING = "business/rating";

export const receiveBusinessRating = (businessId, rating) => ({
  type: RECEIVE_BUSINESS_RATING,
  businessId,
  rating,
});

export const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business,
});

export const receiveSearchedBusinesses = (searchedBusiness) => ({
  type: RECEIVE_SEARCH_BUSINESSES,
  searchedBusiness,
});

export const receiveUnreviewedBusiness = (businesses) => ({
  type: RECEIVE_UNREVIEWED_BUSINESS,
  businesses,
});

export const fetchUnreviewedBusiness = () => async (dispatch) => {
  const res = await fetch("/api/businesses/unreviewed");
  const data = await res.json();
  dispatch(receiveUnreviewedBusiness(data));
};

export const fetchBusinesses = () => async (dispatch) => {
  const res = await fetch("/api/businesses");
  const data = await res.json();
  dispatch(receiveBusinesses(data));
};

export const fetchBusiness = (business_id) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${business_id}`);
  const data = await res.json();
  dispatch(receiveBusiness(data));
};

export const fetchSearchTerm = (searchTerm) => async (dispatch) => {
  const res = await fetch(`/api/businesses/search?query=${searchTerm}`);
  const data = await res.json();
  dispatch(receiveSearchedBusinesses(data));
};

export const fetchUpdateBusinessRating = (businessId) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${businessId}`);
  const data = await res.json();
  dispatch(receiveBusinessRating(data.business.id, data.business.rating));
};

export const businessReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return { ...state, ...action.business.business };
    case RECEIVE_BUSINESS:
      return { [action.business.business.id]: action.business.business };
    case RECEIVE_UNREVIEWED_BUSINESS:
      return { ...action.businesses };
    case RECEIVE_SEARCH_BUSINESSES:
      return { ...action.searchedBusiness };
    case REMOVE_REVIEW:
      const biz = newState[Object.keys(newState)];
      const reviewId = action.reviewId;
      biz.reviews = biz.reviews.filter((id) => id !== reviewId);
      return { ...newState };

    default:
      return { ...state };
  }
};
