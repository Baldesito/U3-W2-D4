import { render, screen } from "@testing-library/react";
import BookList from "./BookList";

const books = [
  { id: 1, title: "Libro 1", img: "url1" },
  { id: 2, title: "Libro 2", img: "url2" },
  { id: 3, title: "Libro 3", img: "url3" },
];

test(() => {
  render(<BookList books={books} />);
  const bookCards = screen.getAllByTestId("book-card");
  expect(bookCards.length).toBe(books.length);
});
