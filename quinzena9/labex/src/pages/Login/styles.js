import styled from 'styled-components';

export const LoginContainer = styled.main`
  min-height: calc(100vh - 9.6rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContent = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 7.6rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.4rem;
    letter-spacing: 4.725px;
    text-transform: uppercase;
  }

  p {
    margin-top: 2rem;
    background-color: red;
    width: 45rem;
    text-align: center;
    line-height: 3.2rem;
  }

  form {
    width: 100%;
    max-width: 45rem;
    padding: 4.8rem 0;
  }

  button {
    width: 100%;
    padding: 1.5rem 2rem;
    font-size: 1.6rem;
    font-family: inherit;
    text-transform: uppercase;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
    background: #fff;
    transition: all 0.2s ease;

    &:hover {
      background: #d2d2d2;
    }

    &:disabled {
      background: #989db9;
      cursor: wait;
    }
  }
`;
