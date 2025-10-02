import { useSelector } from "react-redux";
import { getList } from "./selectors";

export const useList = () => {
  const products = useSelector(getList);
  return products;
};

export const useItem = (slug) => {
  const products = useSelector(getList);
  if (!products || products.length === 0 || !slug) return null;
  return products.find((p) => p.slug === slug);
};
