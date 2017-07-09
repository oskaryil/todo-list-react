import {
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from "../actions/types";

const INITIAL_STATE = {
  user: null,
  email: "",
  password: "",
  error: "",
  accessToken: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USER_SIGNUP:
      return { ...state, loading: true };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        user: action.payload
      };
    case USER_SIGNUP_FAIL:
      return { ...state, loading: false, error: "Something went wrong" };
    case USER_LOGIN:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        user: action.payload
      };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: "Something went wrong" };
    default:
      return state;
  }
};
