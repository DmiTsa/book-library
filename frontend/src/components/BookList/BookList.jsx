import { useSelector } from "react-redux";
import style from "./BookList.module.css";

export default function BookList() {
  const books = useSelector((state) => state.books);
  console.log(books);

  return (
    <div className={style.bookList}>
      <h2>Book list</h2>
      {books.length !== 0 ? (
        <ul>
          {books.map((book, i) => {
            return (
              <li key={i} style={{ listStyle: "none" }}>
                <div className={style.booklistItem}>
                  <div className={style.booklistItemText}>
                    <p>
                      {i + 1}. {book.title} by <strong>{book.author}</strong>
                      (manual)
                    </p>
                  </div>
                  <div className={style.booklistitemButtons}>
                    <button className={style.icoBtn}>0</button>
                    <button className={style.delBtn}>Delete</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No books</p>
      )}
    </div>
  );
}
