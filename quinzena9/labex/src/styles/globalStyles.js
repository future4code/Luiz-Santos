import { createGlobalStyle } from 'styled-components';

// font-family: 'Barlow', sans-serif;
// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Bellefair', serif;
import bodyImg from '../img/capa.png';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    width: 100%;
    font-family: 'Barlow', sans-serif;
    font-size: 1.6rem;
    background: url(${bodyImg}) no-repeat center center ;
    background-size: cover;
  }
`;

export default GlobalStyle;
