import styled from "styled-components";

export const Container = styled.div`
  > img {
    width: 100%;
    height: 370px;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;

  > strong {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.gray};
  }

  > h2 {
    font-size: 18px;
    font-weight: 700;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    p {
      font-weight: 500;
      color: ${({ theme }) => theme.gray};
    }

    div {
      display: flex;
      align-items: center;
      gap: 3px;

      svg {
        color: ${({ theme }) => theme.red};
      }
    }
  }

  > span {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.gray};
  }
`;
