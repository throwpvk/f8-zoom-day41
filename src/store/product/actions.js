import { SET_LIST, GET_LIST } from "./constants";
import http from "../../utils/http";

export const getList = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST });
    const response = await http.get("/products");
    const data = response.data;
    dispatch(setList(data.items));
  };
};

export const setList = (payload) => {
  return {
    type: SET_LIST,
    payload,
  };
};
