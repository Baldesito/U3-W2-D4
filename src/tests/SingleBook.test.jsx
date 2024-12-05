import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleBook from "../components/SingleBook";

const book = {
  id: 1,
  title: "Libro 1",
  img: "https://via.placeholder.com/150",
};

test("verifica che il componente SingleBook venga renderizzato correttamente", () => {
  render(<SingleBook book={book} />);
  const bookElement = screen.getByTestId("single-book");
  expect(bookElement).toBeInTheDocument();
  expect(bookElement).toHaveTextContent("Libro 1");
  expect(screen.getByAltText("Libro 1")).toHaveAttribute(
    "src",
    "https://via.placeholder.com/150"
  );
});
