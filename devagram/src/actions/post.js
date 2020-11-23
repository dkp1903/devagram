// import history from "../history";
// import axios from "../axios";

// export const action__name = (action_params) => {
//   return {
//     type: SAMPLE_ACTION,
//     payload: action_params,
//   };
// };

// export const async_action_name = (action_params) => async (
//   dispatch,
//   getState
// ) => {
//   const { currentStateInStore } = getState().someReduxState;
//   const response = await axios.post("./someRoute", {
//     action_params,
//     currentStateInStore,
//   });
//   dispatch({
//     type: SAMPLE_ACTION,
//     payload: response.data,
//   });
// };
