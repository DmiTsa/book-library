import style from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={style.filter}>
      <input type="text" placeholder="Filter by author..." />
      <input type="text" placeholder="Filter by title..." />
      <label>
        <input type="checkbox" />
        Only favorite
      </label>
      <button>Reset filters</button>
    </div>
  );
}
