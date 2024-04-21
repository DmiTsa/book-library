import NewBook from './components/NewBook/NewBook';
import Filter from './components/Filter/Filter';
import BookList from './components/BookList/BookList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Book Library</h1>
      </header>

      <div className="appContainer">
        <div className="leftSide">
          <NewBook />
        </div>
        <div className="rightSide">
          <Filter />
          <BookList />
        </div>
      </div>

    </div>
  );
}

export default App;
