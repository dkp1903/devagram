import { SIGN_IN, SIGN_OUT, AUTH_ERROR, AUTH_START } from "./types";

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const signIn = ({ email, password }) => (dispatch) => {
  dispatch(authStart());
  if (email === "app@devagram.com" && password === "devagram2020") {
    return {
      type: SIGN_IN,
      payload: { email, password },
    };
  }
  return {
    type: AUTH_ERROR,
    payload: "Invalid credentials",
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
