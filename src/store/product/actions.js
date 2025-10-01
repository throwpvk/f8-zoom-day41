import { SET_LIST } from "./constant";

const setList = (payload) => {
  return {
    type: SET_LIST,
    payload,
  };
};

const productActions = { setList };
export default productActions;
