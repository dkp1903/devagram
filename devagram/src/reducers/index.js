import { combineReducers } from "redux";
// import importedFromReducer from "./importedFromReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  // property_name: importedFromReducer,
  posts: postsReducer,
});
