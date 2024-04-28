import { useDispatch } from "react-redux";
import { delBook, toggleBook } from "../../redux/slices/booksSlice";
import { MdFavorite as FavoriteFill } from "react-icons/md";
import { MdFavoriteBorder as Favorite } from "react-icons/md";
import style from "./BookListItem.module.css";

export default function BookListItem({ book, i }) {
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(delBook(id));
  };

  const favoriteHandler = (id) => {
    dispatch(toggleBook(id));
  };

  return (
    <div className={style.booklistItem}>
      <div className={style.booklistItemText}>
        <p>
          {i + 1}. {book.title} by <strong>{book.author}</strong> {book.source}
        </p>
      </div>
      <div className={style.booklistitemButtons}>
        <span onClick={() => favoriteHandler(book.id)}>
          {book.isFavorite ? (
            <FavoriteFill className={style.favoriteIcon} />
          ) : (
            <Favorite className={style.favoriteIcon} />
          )}
        </span>
        <button className={style.delBtn} onClick={() => deleteBook(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
