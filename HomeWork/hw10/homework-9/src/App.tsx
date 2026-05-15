import { Routes, Route, Link } from "react-router";

import AddBook from "./AddBook";
import BookDetail from "./BookDetail";
import GetBooks from "./GetAllBooks";

function App() {

  return (
    <div>

      <nav className="flex gap-4 p-4 bg-gray-200">

        <Link to="/">
          Home
        </Link>

        <Link to="/add">
          Add Book
        </Link>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<GetBooks />}
        />

        <Route
          path="/add"
          element={<AddBook />}
        />

        <Route
          path="/books/:id"
          element={<BookDetail />}
        />

      </Routes>

    </div>
  );
}

export default App;