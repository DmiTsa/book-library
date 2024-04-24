import { useDispatch, useSelector } from "react-redux";
import { delBook, toggleBook } from "../../redux/books/actions";
import FavoriteFill from "../icons/FavoriteFill";
import Favorite from "../icons/Favorite";
import style from "./BookList.module.css";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(delBook(id));
  };

  const favoriteHandler = (id) => {
    // console.log(toggleBook(id));

    dispatch(toggleBook(id));
  };
  return (
    <div className={style.bookList}>
      <h2>Book list</h2>
      {books.length !== 0 ? (
        <ul>
          {books.map((book, i) => {
            console.log(book.isFavorive);
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
                    <span onClick={() => favoriteHandler(book.id)}>
                      {book.isFavorite ? <FavoriteFill /> : <Favorite />}
                    </span>
                    <button
                      className={style.delBtn}
                      onClick={() => deleteBook(book.id)}
                    >
                      Delete
                    </button>
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
