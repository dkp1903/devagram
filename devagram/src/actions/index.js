import { SAMPLE_ACTION, FETCH_POSTS, FETCH_STREAM } from "./types";
import history from "../history";
import axios from "axios";

const posts = axios.create({
  baseURL: "http://localhost:3001/api/posts",
});

export const action__name = (action_params) => {
  return {
    type: SAMPLE_ACTION,
    payload: action_params,
  };
};

export const async_action_name = (action_params) => async (
  dispatch,
  getState
) => {
  const { currentStateInStore } = getState().someReduxState;
  const response = await someURL.post("./someRoute", {
    action_params,
    currentStateInStore,
  });
  dispatch({
    type: SAMPLE_ACTION,
    payload: response.data,
  });
  history.push("/"); // redirect
};

// GET All posts from global state ( sample )
export const fetchPosts = () => async (dispatch) => {
  const response = await posts.get("/");

  dispatch({ type: FETCH_POSTS, payload: response.data });
};

// GET post from global state ( sample )
export const fetchPost = (id) => async (dispatch) => {
  const response = await posts.get(`/${id}`);

  dispatch({ type: FETCH_POST, payload: response.data });
};

// Auth Actions
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
