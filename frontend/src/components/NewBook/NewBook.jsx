import { useState } from "react";
import style from "./NewBook.module.css";

export default function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title && author) {
      // dispatchEvent
      setAuthor("");
      setTitle("");
      // console.log(title, author); //dev
    }
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
          <button>Add random</button>
          <button>Add random via API</button>
        </div>
      </form>
    </div>
  );
}
