import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, LOGOUT } from "./types";
import { add, get, remove } from "../utils/handleLocalStorage";
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

export const logout = () => {
  /**
   * Removing items from localStorage
   */
  remove("user");
  remove("token");
  remove("tokenExpiration");
  return {
    type: LOGOUT,
  };
};

export const checkAuthTimeout = (time) => {
  console.log(time);
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time);
  };
};

export const checkAuthState = () => {
  /**
   * get token from localStorage and verify user then auto-login on refresh
   */
  return async (dispatch) => {
    dispatch(authStart());
    const token = get("token");
    if (!token) {
      return dispatch(logout());
    }
    try {
      const tokenExpiration = get("tokenExpiration");
      if (+tokenExpiration < Date.now()) {
        return dispatch(logout());
      }

      const token = get("token");
      const response = await axios.get("/auth", {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      dispatch(authSuccess({ user: response.data.user, token }));
      dispatch(checkAuthTimeout(+tokenExpiration - Date.now()));
    } catch (error) {
      console.log(error.response.data);
      dispatch(logout());
    }
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

      /**
       * Adding items to localStorage
       */
      add("user", JSON.stringify(response.data.user));
      add("token", response.data.token);
      add("tokenExpiration", new Date().getTime() + 24 * 60 * 60 * 1000);

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
