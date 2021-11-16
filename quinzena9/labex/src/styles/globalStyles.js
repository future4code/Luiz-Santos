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
    background-size: cover;
    color: #fff;
  }

  h1, h2, h3, h4 {
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
  }

  h1 {
  
    font-size: 15rem;
    line-height: 17.2rem;
  }

  h2 {
    font-size: 10rem;
    line-height: 11.5rem;
  }

  h3 {
    font-size: 5.6rem;
    line-height: 6.4rem;
  }

  h4 {
    font-size: 3.2rem;
    line-height: 3.7rem;
  }

  h5 {
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: normal;
    font-size: 2.8rem;
    line-height: 3.4rem;
    letter-spacing: 4.725px;
    color: #D0D6F9;
    text-transform: uppercase;
  }

  p {
    font-size: 1.8rem;
    line-height: 3.2rem;
  }

  @media (max-width: 960px) {
   
   h5 {
     font-size: 2rem;
     line-height: 24px;
     letter-spacing: 3.375px;
   }

   h1 {
     font-size: 11.8rem;
     line-height: 150px;
   }

   p {
     font-size: 1.6rem;
     line-height: 28px;
   }

   h4 {
     font-size: 24px;
     line-height: 28px;
   }

  }

  @media (max-width: 500px) {
   
   h5 {
     font-size: 1.6rem;
     line-height: 19px;
     letter-spacing: 2.7px;
   }

   h1 {
    font-size: 8rem;
    line-height: 10rem;
   }

   p {
    font-size: 1.5rem;
    line-height: 25px;
   }

   h4 {
     font-size: 1.6rem;
     line-height: 1.8rem;
   }
 }
`;

export default GlobalStyle;
