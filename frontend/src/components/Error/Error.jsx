import { useSelector } from "react-redux";
import style from "./Error.module.css";
import { selectErrorMessage } from "../../redux/slices/errorSlice";

export default function Error() {
  const errorMessage = useSelector(selectErrorMessage);
  return <div className={style.error}>{errorMessage}</div>; //hide
}
