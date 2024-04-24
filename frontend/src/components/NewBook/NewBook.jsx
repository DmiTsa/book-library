import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actions";
import { booksData } from "../../data/booksData.js";
import style from "./NewBook.module.css";

function genId() {
  return Math.floor(Math.random() * 1000);
}

export default function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = { title, author, id: genId() };

      dispatch(addBook(book));
      setAuthor("");
      setTitle("");
    }
  };

  const addRandomBook = () => {
    const randBook = Math.floor(Math.random() * booksData.length);
    const book = {
      title: booksData[randBook].title,
      author: booksData[randBook].author,
      id: genId(),
    };

    dispatch(addBook(book));
  };

  return (
    <div className={style.newBook}>
      <h2>Add a new book</h2>
      <form className={style.newBookForm} onSubmit={onSubmitHandler}>
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
          <button type="button" onClick={() => addRandomBook()}>
            Add random
          </button>
          <button>Add random via API</button>
        </div>
      </form>
    </div>
  );
}
