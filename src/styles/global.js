import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      height: 100%;
  }

  @font-face {
  font-family: "Fredoka One";
  src: url("/fonts/fredoka/fredoka.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  }

  body {
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      font: 400 16px Roboto, sans-serif;
  }
`;