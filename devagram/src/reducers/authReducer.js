import { SIGN_IN, SIGN_OUT, AUTH_ERROR, AUTH_START } from "../actions/types";

const INITIAL_STATE = {
  isAuth: null,
  user: null,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN:
      return {
        ...state,
        isAuth: true,
        userId: payload,
        loading: false,
        error: null,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuth: false,
        userId: null,
        loading: false,
        error: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuth: false,
        user: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
