import { AuthorCard } from "../AuthorCard";
import { Container } from "./styles";

export const AuthorsList = () => {
  return (
    <Container className="container">
      <h2>Authors</h2>
      <div>
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </Container>
  );
};
