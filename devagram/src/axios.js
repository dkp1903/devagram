import axios from "axios";

/**
 * To set base URL for every API call
 */

const instance = axios.create({
  baseURL: "https://devagram.herokuapp.com/api",
});

export default instance;
