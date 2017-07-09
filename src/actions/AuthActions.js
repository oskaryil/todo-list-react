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

import { signupUser } from "../api/auth";

export const signup = (email, password) => {
  console.log(email, password);
  return async dispatch => {
    dispatch({ type: USER_SIGNUP });
    try {
      const data = await signupUser(email, password);
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
      console.log(data);
    } catch (e) {
      dispatch({ type: USER_SIGNUP_FAIL });
      console.log(e);
    }
  };
};

export const emailChanged = value => {
  return {
    type: EMAIL_CHANGED,
    payload: value
  };
};
export const passwordChanged = value => {
  return {
    type: PASSWORD_CHANGED,
    payload: value
  };
};
