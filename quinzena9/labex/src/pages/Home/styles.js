import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: calc(100vh - 9.6rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeContent = styled.div`
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
