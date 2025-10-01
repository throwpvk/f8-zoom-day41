import { Link } from "react-router-dom";
import style from "./ProductList.module.scss";
import http from "./../../utils/http";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  actions as productActions,
  useList as useProductList,
} from "../../store/product";

const ProductList = () => {
  const disPatch = useDispatch();
  const products = useProductList();

  useEffect(() => {
    (async () => {
      const response = await http.get("/redux-tasks");
      disPatch(productActions.setList(response));
    })();
  }, [disPatch]);
  return (
    <div className={style.ProductList}>
      <h1>ProductList Page</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
