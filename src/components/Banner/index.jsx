import {
  Container,
  Details,
  Header,
  Input,
  Logo,
  PagesAndRate,
} from "./styles";
import { GiBookCover, GiHearts } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

export const Banner = () => {
  return (
    <Container>
      <Header className="container">
        <Logo>
          <GiBookCover />
          <h2>BookBox</h2>
        </Logo>
        <Input>
          <input placeholder="What do you want to read?" />
          <IoSearch />
        </Input>
      </Header>
      <section className="container">
        <Details>
          <h1>Outlander</h1>
          <PagesAndRate>
            <p>800 pages</p>
            <div>
              <GiHearts />
              <span>97%</span>
            </div>
          </PagesAndRate>
          <p>
            Scottish Highlands, 1945. Claire Randall, a former British combat
            nurse, is just back from the war and reunited with her husband on a
            second honeymoon when she walks through a standing stone in one of
            the ancient circles that dot the British Isles.
          </p>
          <button>See more</button>
        </Details>
      </section>
    </Container>
  );
};
