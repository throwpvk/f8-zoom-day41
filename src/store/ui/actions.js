import { SHOW_LOADING, HIDE_LOADING } from "./constants";

export const showLoading = (payload) => {
  return {
    type: SHOW_LOADING,
    payload,
  };
};

export const hideLoading = (payload) => {
  return {
    type: HIDE_LOADING,
    payload,
  };
};
