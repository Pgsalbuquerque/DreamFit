import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  @font-face {
  font-family: "Fredoka One";
  src: url("/fonts/fredoka/fredoka.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  }

  @font-face {
  font-family: "Press Start 2P";
  src: url("/fonts/p2/p2.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  }

  @font-face {
  font-family: "Roboto";
  src: url("/fonts/roboto/roboto.ttf");
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