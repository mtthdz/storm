import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // reset styles
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.0rem;
  }

  // global wrapper
  .wrapper {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;