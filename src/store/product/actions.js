import { SET_LIST, GET_LIST, SET_DETAIL } from "./constants";
import http from "../../utils/http";
import { actions as uiActions } from "../../store/ui";

export const getList = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST });
    try {
      dispatch(uiActions.showLoading());
      const response = await http.get("/products");
      const data = response.data;
      dispatch(setList(data.items));
    } finally {
      dispatch(uiActions.hideLoading());
    }
  };
};

export const setList = (payload) => {
  return {
    type: SET_LIST,
    payload,
  };
};

export const setDetail = (payload) => {
  return {
    type: SET_DETAIL,
    payload,
  };
};
