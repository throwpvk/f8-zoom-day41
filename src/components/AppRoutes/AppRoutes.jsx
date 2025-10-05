import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import Home from "../../pages/Home";
import DefaultLayout from "../../layouts/DefaultLayout";
import ProductList from "../../pages/ProductList";
import ProductDetail from "../../pages/ProductDetail";
import Loading from "../Loading";

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Loading />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/detail/:slug" element={<ProductDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
