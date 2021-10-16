import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  background: #323232;
  color: #e6e8eb;
  font-family: 'Lato', sans-serif;
}
`;

export default GlobalStyle;
