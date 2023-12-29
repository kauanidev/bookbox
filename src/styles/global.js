import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 62.5%;
  }

  body, button, input, textarea {
    font-family: "DM Sans", sans-serif;
    font-size: 1.6rem;
  }

  .container {
    width: 100%;
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
