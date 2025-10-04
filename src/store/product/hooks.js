import { useSelector } from "react-redux";
import { getList, getDetail } from "./selectors";

export const useList = () => {
  const products = useSelector(getList);
  return products;
};

export const useDetail = () => {
  const detail = useSelector(getDetail);
  return detail;
};
