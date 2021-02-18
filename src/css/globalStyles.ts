import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0rem;
  }
  h1 {
    margin: 1rem 0rem; 
  }
  h2 {
    margin: .8rem 0rem; 
  }
  ol,ul {
    margin-bottom: 0.8rem; 
  }
`;

export default GlobalStyle;
