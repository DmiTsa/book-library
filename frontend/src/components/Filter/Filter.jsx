import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  setAuthorFilter,
  toggleFavorite,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavorite,
  resetFilters,
} from "../../redux/slices/filterSlice";
import style from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const valueTitle = useSelector(selectTitleFilter);
  const valueAuthor = useSelector(selectAuthorFilter);
  const isFavorite = useSelector(selectOnlyFavorite);

  const filterTitleHandler = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const filterAuthorHandler = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const isFavoriteHandler = () => {
    dispatch(toggleFavorite());
  };

  const filterResetHandler = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={style.filter}>
      <input
        type="text"
        placeholder="Filter by author..."
        onChange={filterAuthorHandler}
        value={valueAuthor}
      />
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={filterTitleHandler}
        value={valueTitle}
      />
      <label>
        <input
          type="checkbox"
          checked={isFavorite}
          onChange={isFavoriteHandler}
        />
        Only favorite
      </label>
      <button type="button" onClick={filterResetHandler}>
        Reset filters
      </button>
    </div>
  );
}
