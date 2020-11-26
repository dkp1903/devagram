import axios from "axios";

/**
 * To set base URL for every API call
 */

const baseURL =
  process.env.NODE_ENV.toLowerCase() === "development"
    ? "http://localhost:9999/api"
    : "https://devagram.herokuapp.com/api";

const instance = axios.create({
  baseURL,
});

export default instance;
