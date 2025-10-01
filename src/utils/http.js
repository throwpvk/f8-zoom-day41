import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const _send = async (method, path, data = null, config = {}) => {
  try {
    const response = await httpClient.request({
      method,
      path,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `HTTP Error: ${error.response.status} - ${
          error.response.data.message || error.message
        }`
      );
    } else if (error.request) {
      throw new Error("No response received from server.");
    } else {
      throw new Error(`Request Error: ${error.message}`);
    }
  }
};

const get = async (path, config = {}) => {
  await _send("get", path, null, config);
};
const post = async (path, data, config = {}) => {
  await _send("post", path, data, config);
};
const put = async (path, data, config = {}) => {
  await _send("put", path, data, config);
};
const del = async (path, config = {}) => {
  await _send("delete", path, null, config);
};
const patch = async (path, data, config = {}) => {
  await _send("patch", path, data, config);
};

const http = { get, post, put, del, patch };

export default http;
