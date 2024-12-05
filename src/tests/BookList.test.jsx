import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList"; // Assicurati che il percorso sia corretto

const books = [
  { id: 1, title: "Libro 1", img: "https://via.placeholder.com/150" },
  { id: 2, title: "Libro 2", img: "https://via.placeholder.com/150" },
  { id: 3, title: "Libro 3", img: "https://via.placeholder.com/150" },
];

test("verifica che vengano renderizzate tante bootstrap cards quanti sono i libri nel file json", () => {
  render(<BookList books={books} />);
  const bookCards = screen.getAllByTestId("book-card");
  expect(bookCards.length).toBe(books.length);
});
