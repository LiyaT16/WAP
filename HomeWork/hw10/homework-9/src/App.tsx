import { Routes, Route, Link } from "react-router";

import AddBook from "./AddBook";
import BookDetail from "./BookDetail";
import GetBooks from "./GetAllBooks";

function App() {

  return (
    <div>

      <nav className="flex gap-4 p-4 bg-blue-200">

        <Link to="/" className="border-2 rounded-3xl p-2">
          Home
        </Link>

        <Link to="/add" className="border-2 rounded-3xl p-2 bg-red-400">
          Add Book
        </Link>

      </nav>

      <h1 className="text-blue-500 text-4xl">Library App</h1>

      <Routes>

        <Route
          path="/"
          element={<GetBooks />} />

        <Route
          path="/add"
          element={<AddBook />} />

        <Route
          path="/books/:id"
          element={<BookDetail />} />

      </Routes>

    </div>
  );
}

export default App;