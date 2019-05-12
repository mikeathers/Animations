import * as actionTypes from "actions";

const defaultState = {
  user: {},
  isAuthenticated: false
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.user,
        isAuthenticated: action.user.isAuthenticated
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default auth;
