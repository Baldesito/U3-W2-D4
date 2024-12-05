import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <Row>
      {books.map((book) => (
        <Col key={book.id} md={4}>
          <Card data-testid="book-card" className="mb-4">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
