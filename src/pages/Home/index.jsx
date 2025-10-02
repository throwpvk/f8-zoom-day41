import { Link } from "react-router-dom";
import style from "./Home.module.scss";

function Home() {
  return (
    <div className={style.home}>
      <h1>Home Page</h1>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Home;
