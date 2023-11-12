import { createGlobalStyle, css } from 'styled-components';

// TODO: create actual meaningful global styles based on wireframe
const GlobalStyles = createGlobalStyle`
  // reset styles
  html {
    --black: #0a0a0a;
    --white: #ffffff;
    --lightGrey: #adadad;
    --lightGreyBlur: #adadad30;
    --darkGrey: #1e1e1e;
    --darkGreyBlur: #1e1e1e80;
    --red: #ff6565;
    --green: #29ffa5;
    --maxWidth: 1200px;
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.4rem;
    line-height: normal;
  }

  h1 {
    font-size: 1.6rem;
  }

  // global wrapper
  .wrapper {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;