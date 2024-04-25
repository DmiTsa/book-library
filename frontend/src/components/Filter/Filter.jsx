import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
} from "../../redux/slices/filterSlice";
import style from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectTitleFilter);

  const filterTitleHandler = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const filterResetHandler = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={style.filter}>
      <input type="text" placeholder="Filter by author..." />
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={filterTitleHandler}
        value={value}
      />
      <label>
        <input type="checkbox" />
        Only favorite
      </label>
      <button type="button" onClick={filterResetHandler}>
        Reset filters
      </button>
    </div>
  );
}
