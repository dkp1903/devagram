import { SIGN_OUT, AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "./types";
import axios from "../axios";

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (userData) => {
  return {
    type: AUTH_SUCCESS,
    payload: userData,
  };
};

export const authFailure = (error) => {
  return {
    type: AUTH_FAIL,
    payload: error,
  };
};

export const clearError = () => {
  return {
    type: AUTH_FAIL,
    payload: "",
  };
};

export const authUser = (authData, isSignUp) => {
  return async (dispatch) => {
    dispatch(authStart());
    try {
      const url = isSignUp ? "/auth/signup" : "/auth/signin";
      const response = await axios.post(url, authData, {
        responseType: "json",
      });
      dispatch(authSuccess(response.data));
    } catch (error) {
      console.log(error.response.data.message);
      dispatch(authFailure(error.response.data.message));
      setTimeout(() => {
        dispatch(clearError());
      }, 5000);
    }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
