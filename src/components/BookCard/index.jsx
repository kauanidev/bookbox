import { GiHearts } from "react-icons/gi";
import { Container, Details } from "./styles";

export const BookCard = () => {
  return (
    <Container>
      <img src="/images/outlander.jpg" alt="Book cover" />
      <Details>
        <span>Diana Gabaldon, 2016</span>
        <h2>Outlander</h2>
        <div>
          <p>800 pages</p>
          <div>
            <GiHearts />
            <span>97%</span>
          </div>
        </div>
        <strong>Aventura, Ficção, Romance</strong>
      </Details>
    </Container>
  );
};
