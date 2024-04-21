import style from "./BookList.module.css";

export default function BookList() {
  return (
    <div className={style.bookList}>
      <h2>Book list</h2>
      <div className={style.booklistItem}>
        <div className={style.booklistItemText}>
          <p>
            1. My book 1 by <strong>Gogol</strong>(manual)
          </p>
        </div>
        <div className={style.booklistitemButtons}>
          <button className={style.icoBtn}>0</button>
          <button className={style.delBtn}>Delete</button>
        </div>
      </div>
      <div className={style.booklistItem}>
        <div className={style.booklistItemText}>
          <p>
            2. My book super by <strong>Stanislav</strong>(manual)
          </p>
        </div>
        <div className={style.booklistitemButtons}>
          <button className={style.icoBtn}>0</button>
          <button className={style.delBtn}>Delete</button>
        </div>
      </div>
      <div className={style.booklistItem}>
        <div className={style.booklistItemText}>
          <p>
            3. Amazing book 3000 by <strong>King</strong>(manual)
          </p>
        </div>
        <div className={style.booklistitemButtons}>
          <button className={style.icoBtn}>0</button>
          <button className={style.delBtn}>Delete</button>
        </div>
      </div>
      <div className={style.booklistItem}>
        <div className={style.booklistItemText}>
          <p>
            4. My sectret book by <strong>Veronica</strong>(manual)
          </p>
        </div>
        <div className={style.booklistitemButtons}>
          <button className={style.icoBtn}>0</button>
          <button className={style.delBtn}>Delete</button>
        </div>
      </div>
    </div>
  );
}
