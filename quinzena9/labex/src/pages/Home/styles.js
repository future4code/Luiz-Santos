import styled from 'styled-components';
import backgroundImg from '../../img/capa.png';

export const HomeContainer = styled.main`
  min-height: calc(100vh - 9.6rem);
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    align-items: flex-start;
  }
`;

export const HomeContent = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: space-evenly;
    min-height: calc(100vh - 9.6rem);
  }
`;

export const HomeContentInfo = styled.div`
  max-width: 58rem;

  h5 {
    margin-bottom: 2.4rem;
  }

  h1 {
    margin-bottom: 2.4rem;
  }

  p {
    color: #d0d6f9;
  }

  @media (max-width: 960px) {
    max-width: 45rem;
    text-align: center;
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

    @media (max-width: 960px) {
      width: 24.2rem;
      height: 24.2rem;
    }

    @media (max-width: 500px) {
      width: 15rem;
      height: 15rem;
      font-size: 2rem;
      line-height: 2.3rem;
      letter-spacing: 1.25px;
    }
  }
`;
// 35, 38, 47
