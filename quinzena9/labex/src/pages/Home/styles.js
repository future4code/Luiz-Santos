import styled from 'styled-components';
import backgroundImg from '../../img/capa.png';

export const HomeContainer = styled.main`
  min-height: calc(100vh - 9.6rem);
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContent = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeContentInfo = styled.div`
  max-width: 58rem;

  h5 {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.4rem;
    letter-spacing: 4.725px;
    margin-bottom: 2.4rem;
    color: #d0d6f9;
  }

  h1 {
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: normal;
    font-size: 15rem;
    line-height: 17.2rem;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  }

  p {
    font-family: 'Barlow';
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: #d0d6f9;
  }
`;

export const CustomLink = styled.div`
  a {
    background: #fff;
    width: 27.4rem;
    height: 27.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    font-family: 'Bellefair';

    font-size: 3.2rem;
    line-height: 3.7rem;
    letter-spacing: 2px;
    color: #0b0d17;

    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
      box-shadow: 0 0 0 8rem rgba(35, 38, 47, 0.7);
      mix-blend-mode: normal;
    }
  }
`;
// 35, 38, 47
