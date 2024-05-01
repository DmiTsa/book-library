import { useState } from "react";
import { useDispatch } from "react-redux";
import createBook from "../../utils/createBook.js";
import { addBook, fetchBook } from "../../redux/slices/booksSlice.js";
import { booksData } from "../../data/booksData.js";
import style from "./NewBook.module.css";

export default function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const addManualBook = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = createBook(title, author, "manual");

      dispatch(addBook(book));
      setAuthor("");
      setTitle("");
    }
  };

  const addRandomBook = () => {
    const randBook = Math.floor(Math.random() * booksData.length);
    const book = createBook(
      booksData[randBook].title,
      booksData[randBook].author,
      "random"
    );

    dispatch(addBook(book));
  };

  const addRandomBookApi = () => {
    dispatch(fetchBook());
  };

  return (
    <div className={style.newBook}>
      <h2>Add a new book</h2>
      <form className={style.newBookForm} onSubmit={addManualBook}>
        <label htmlFor="Title">Title:</label>
        <input
          type="text"
          id="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <label htmlFor="Author">Author:</label>
        <input
          type="text"
          id="Author"
          value={author}
          onChange={(e) => {
            setAuthor(e.currentTarget.value);
          }}
        />
        <div className={style.newBookButtons}>
          <button type="submit">Add book</button>
          <button type="button" onClick={addRandomBook}>
            Add random
          </button>
          <button type="button" onClick={addRandomBookApi}>
            Add random via API
          </button>
        </div>
      </form>
    </div>
  );
}
