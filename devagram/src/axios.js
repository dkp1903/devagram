import axios from "axios";

/**
 * To set base URL for every API call
 */

const instance = axios.create({
  baseURL: "http://localhost:9999/api",
});

export default instance;
