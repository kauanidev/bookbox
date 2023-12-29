import { BookCard } from "../BookCard";
import { Container } from "./styles";

export const BooksList = () => {
  return (
    <Container className="container">
      <h1>Highlights</h1>
      <div>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </Container>
  );
};
