import csrfFetch from "./csrf";

export const RECEIVE_USERS = "users/user";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const fetchUsers = () => async (dispatch) => {
  const res = await csrfFetch("/api/users");
  const data = await res.json();
  dispatch(receiveUsers(data));
};

const userReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...oldState, ...action.users };
    default:
      return oldState;
  }
};



export default userReducer;
