import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("horror.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) =>
        console.error("Errore nel caricamento dei libri:", error)
      );
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Balde books</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;
