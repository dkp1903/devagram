import { AUTH_SUCCESS, LOGOUT, AUTH_START, AUTH_FAIL } from "../actions/types";

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
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload,
        loading: false,
        error: null,
      };
    case LOGOUT:
    case AUTH_FAIL:
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
