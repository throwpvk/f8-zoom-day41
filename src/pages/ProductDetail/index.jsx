import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import style from "./ProductDetail.module.scss";
import {
  actions as productActions,
  useList as useProductList,
  useItem as useProductItem,
} from "../../store/product";

function ProductDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useProductList();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // Nếu chưa có list → fetch list
      if (!products || products.length === 0) {
        await dispatch(productActions.getList());
      }

      // Sau khi có list → lấy product bằng hook
      const item =
        products?.find((p) => p.slug === slug) || useProductItem(slug);
      setProduct(item);

      setLoading(false);
    };

    loadData();
  }, [dispatch, products, slug]);

  if (loading || !product) return <div>Loading...</div>;

  return (
    <div className={style.ProductDetail}>
      <button onClick={() => navigate("/products")}>Back to list</button>
      <h1>Product Detail Page</h1>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
