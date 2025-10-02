import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./ProductList.module.scss";
import {
  actions as productActions,
  useList as useProductList,
} from "../../store/product";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useProductList();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productActions.getList());
  }, [dispatch]);

  const handleClick = (product) => {
    navigate(`/detail/${product.slug}`);
  };

  return (
    <div className={style.ProductList}>
      <h1>ProductList Page</h1>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() => handleClick(product)}
            style={{ cursor: "pointer" }}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
