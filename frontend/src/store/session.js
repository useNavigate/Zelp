import { RECEIVE_REVIEW, REMOVE_REVIEW } from "./review";
import csrfFetch from "./csrf";

const SET_CURRENT_USER = "session/setCurrentUser";
const REMOVE_CURRENT_USER = "session/removeCurrentUser";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER,
  };
};

const storeCSRFToken = (response) => {
  const csrfToken = response.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};

export const storeCurrentUser = (user) => {

  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
};

//Thunk action creators
//save user session when page refreshes
export const restoreSession = () => async (dispatch) => {
  const response = await csrfFetch("/api/session"); //GET
  storeCSRFToken(response);
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
};

export const login =
  ({ credential, password }) =>
  async (dispatch) => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password }),
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
  };

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  storeCurrentUser(null);
  dispatch(removeCurrentUser());
  return response;
};
export const signup = (user) => async (dispatch) => {
  const { email, password, firstName, lastName, birthday, zipCode, avatar } =
    user;
  const formData = new FormData();
  formData.append("[user]email", email);
  formData.append("[user]password", password);
  formData.append("[user]first_name", firstName);
  formData.append("[user]last_name", lastName);
  formData.append("[user]birthday", birthday);
  formData.append("[user]zip_code", zipCode);
  if(avatar){

    formData.append("[user]avatar", avatar);
  }


  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: formData,

  });

  const data = await response.json();


  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return data;
};

// const initialState = {
//   user: JSON.parse(sessionStorage.getItem("currentUser")),
// };


// export const signup = (user) => async (dispatch) => {
//   const { email, password, firstName, lastName, birthday, zipCode } = user;
//   const response = await csrfFetch("/api/users", {
//     method: "POST",
//     body: JSON.stringify({
//       email,
//       password,
//       first_name: firstName,
//       last_name: lastName,
//       birthday,
//       zip_code: zipCode,
//     }),
//   });


//   const data = await response.json();



//   storeCurrentUser(data.user);
//   dispatch(setCurrentUser(data.user));

// return data
// };

const initialState = {
  user: JSON.parse(sessionStorage.getItem("currentUser")),
};
const sessionReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.payload };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
      //update
    case RECEIVE_REVIEW:
      if (!newState.user.reviews.includes(action.review.id)) {
        newState.user.reviews.push(action.review.id);
      }
      storeCurrentUser(newState.user);
      return newState;
      //remove
    case REMOVE_REVIEW:
      const deleteIdx = newState.user.reviews.indexOf(action.reviewId);
      newState.user.reviews.splice(deleteIdx, 1);
      storeCurrentUser(newState.user);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
