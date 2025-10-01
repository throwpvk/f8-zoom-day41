import { useSelector } from "react-redux";
import { getList } from "./selectors";

export const useList = () => {
  const products = useSelector(getList);
  return products;
};
