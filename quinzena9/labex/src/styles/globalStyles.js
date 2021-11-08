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
    background:  #0B0D17;
    /* background: url(${bodyImg}) no-repeat center center ; */
    background-size: cover;
    color: #fff;
  }

  /* main {
    width: 100%;
    max-width: 110rem;
    margin: 0 auto;
    height: 100%;
    padding: 0 2rem;
  } */
`;

export default GlobalStyle;
