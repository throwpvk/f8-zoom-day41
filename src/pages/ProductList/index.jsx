import { Link } from "react-router-dom";
import style from "./ProductList.module.scss";
import productActions from "../../store/product/actions";
import http from "./../../utils/http";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const disPatch = useDispatch();
  const products = useSelector((state) => state.product.list);

  useEffect(() => {
    (async () => {
      const response = await http.get("/redux-tasks");
      console.log(response);

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
