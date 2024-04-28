import { useSelector } from "react-redux";
import { selectorBook } from "../../redux/slices/booksSlice";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavorite,
} from "../../redux/slices/filterSlice";
import BookListItem from "../BookListItem/BookListItem";
import style from "./BookList.module.css";

export default function BookList() {
  const books = useSelector(selectorBook);
  const filterTitleBooks = useSelector(selectTitleFilter);
  const filterAuthorBooks = useSelector(selectAuthorFilter);
  const filterIsFavorite = useSelector(selectOnlyFavorite); //условие

  const filtredBooks = books.filter((book) => {
    const matchedTitle = book.title
      .toLowerCase()
      .includes(filterTitleBooks.toLowerCase());
    const matchedAuthor = book.author
      .toLowerCase()
      .includes(filterAuthorBooks.toLowerCase());
    const matchedFavorite = filterIsFavorite ? book.isFavorite : true;

    return matchedTitle && matchedAuthor && matchedFavorite;
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
