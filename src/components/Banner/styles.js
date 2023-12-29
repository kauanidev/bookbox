import styled from "styled-components";

export const Container = styled.section`
  height: 600px;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(/images/outlander.jpg) center/cover no-repeat;
  display: flex;
  flex-direction: column;

  > section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${({ theme }) => theme.white};

  svg {
    background: ${({ theme }) => theme.primary};
    outline: 10px solid ${({ theme }) => theme.primary};
    border-radius: 50%;
    font-size: 20px;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 38rem;
  gap: 1rem;
  border: 2px solid ${({ theme }) => theme.white};
  padding: 0 1rem;
  border-radius: 6px;

  input {
    background: none;
    border: none;
    flex: 1;
    height: 3.6rem;
    color: ${({ theme }) => theme.white};

    &::placeholder {
      color: ${({ theme }) => theme.white};
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    color: ${({ theme }) => theme.white};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 430px;
  color: ${({ theme }) => theme.white};
  margin-top: auto;
  margin-bottom: auto;

  h1 {
    font-size: 48px;
    font-weight: 700;
  }

  > p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }

  button {
    background: ${({ theme }) => theme.primary};
    border: none;
    height: 36px;
    padding: 0 28px;
    width: max-content;
    color: ${({ theme }) => theme.white};
    border-radius: 6px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const PagesAndRate = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  font-size: 14px;

  svg {
    color: ${({ theme }) => theme.red};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;
