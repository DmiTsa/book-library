import { useSelector } from "react-redux";
import BookListItem from "../BookListItem/BookListItem";
import style from "./BookList.module.css";

export default function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div className={style.bookList}>
      <h2>Book list</h2>
      {books.length !== 0 ? (
        <ul>
          {books.map((book, i) => {
            return (
              <li key={i} style={{ listStyle: "none" }}>
                <BookListItem book={book} i={i} />
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
