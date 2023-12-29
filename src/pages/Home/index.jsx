import { AuthorsList } from "../../components/AuthorsList";
import { Banner } from "../../components/Banner";
import { BooksList } from "../../components/BooksList";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Banner />
      <BooksList />
      <AuthorsList />
    </Container>
  );
};
