import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 70px;
    margin-bottom: 45px;
    font-size: 36px;
    font-weight: 700;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 80px;
  }
`;
