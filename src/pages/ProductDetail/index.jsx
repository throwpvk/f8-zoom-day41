import { useParams, useNavigate } from "react-router-dom";
import style from "./ProductDetail.module.scss";
import {
  actions as productActions,
  useDetail as useProductDetail,
  useList as useProductList,
} from "../../store/product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function ProductDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useProductDetail();
  const products = useProductList();
  const { slug } = useParams();

  useEffect(() => {
    if (!products?.length) {
      dispatch(productActions.getList());
      return;
    }
    if (!product && slug) {
      const detail = products.find((item) => item.slug === slug);
      if (detail) dispatch(productActions.setDetail(detail));
    }
  }, [dispatch, products, slug, product]);

  if (!product) return <div>Loading...</div>;
  return (
    <div className={style.ProductDetail}>
      <button onClick={() => navigate("/products")}>Back to list</button>
      <h1>ProductDetail Page</h1>
      <h2>
        {product.id}. {product.title}
      </h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
