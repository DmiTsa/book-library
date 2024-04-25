import { useSelector } from "react-redux";
import { selectTitleFilter } from "../../redux/slices/filterSlice";
import BookListItem from "../BookListItem/BookListItem";
import style from "./BookList.module.css";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const filterBooks = useSelector(selectTitleFilter);

  const filtredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(filterBooks.toLowerCase());
  });

  return (
    <div className={style.bookList}>
      <h2>Book list</h2>
      {filtredBooks.length !== 0 ? (
        <ul>
          {filtredBooks.map((book, i) => {
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
