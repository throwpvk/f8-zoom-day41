import { useLoading } from "../../store/ui";
import style from "./Loading.module.scss";

const Loading = () => {
  const loading = useLoading();
  if (!loading) return null;
  return <div className={style.loading}></div>;
};

export default Loading;
