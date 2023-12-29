import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  > h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 45px;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 80px;
  }
`;
