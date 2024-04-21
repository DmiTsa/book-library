import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Book Library</h1>
      </header>

      <div className="appContainer">
        <div className="leftSide">
          <div className="newBook">
            <h2>Add a new book</h2>
            <div className="newBookForm">
              <label htmlFor="Title">Title:</label>
              <input type="text" name="Title" />
              <label htmlFor="Author">Author:</label>
              <input type="text" name="Author" />
            </div>
            <div className="newBookButtons">
              <button>Add book</button>
              <button>Add random</button>
              <button>Add random via API</button>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="filter">
            <input type="text" placeholder="Filter by author..." />
            <input type="text" placeholder="Filter by title..." />
            <label>
              <input type="checkbox" />
              Only favorite
            </label>
            <button>Reset filters</button>
          </div>
          <div className="bookList">
            <h2>Book list</h2>
            <div className="booklistItem">
              <div className="booklistItemText">
                <p>1. My book 1 by <strong>Gogol</strong>(manual)</p>
              </div>
              <div className="booklistitemButtons">
                <button className="icoBtn">0</button>
                <button className="delBtn">Delete</button>
              </div>
            </div>
            <div className="booklistItem">
              <div className="booklistItemText">
                <p>2. My book super by <strong>Stanislav</strong>(manual)</p>
              </div>
              <div className="booklistitemButtons">
                <button className="icoBtn">0</button>
                <button className="delBtn">Delete</button>
              </div>
            </div>
            <div className="booklistItem">
              <div className="booklistItemText">
                <p>3. Amazing book 3000 by <strong>King</strong>(manual)</p>
              </div>
              <div className="booklistitemButtons">
                <button className="icoBtn">0</button>
                <button className="delBtn">Delete</button>
              </div>
            </div>
            <div className="booklistItem">
              <div className="booklistItemText">
                <p>4. My sectret book by <strong>Veronica</strong>(manual)</p>
              </div>
              <div className="booklistitemButtons">
                <button className="icoBtn">0</button>
                <button className="delBtn">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
