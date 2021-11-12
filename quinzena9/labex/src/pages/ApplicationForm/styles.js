import styled from 'styled-components';
import backgroundImg from '../../img/backround3.png';

export const Container = styled.main`
  min-height: calc(100vh - 9.6rem);

  /* background: url(${backgroundImg}) no-repeat center center;
  background-size: cover; */
`;

export const Content = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 7.6rem 2rem 0;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    h5 {
      font-size: 2rem;
      line-height: 24px;
      letter-spacing: 3.375px;
    }
  }
`;

export const FormContainer = styled.form`
  padding: 6rem 0;
  width: 100%;
  max-width: 60rem;
  max-width: 45rem;

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
      background: #e3e7fe;
    }

    &:disabled {
      background: #bcbcbc;
      cursor: wait;
    }

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;
export const FormGroupSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  select {
    display: inline-block;
    font-family: inherit;
    font-size: 1.8rem;
    line-height: 1.9rem;
    padding: 1rem 0;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    color: #e9e9e9;
    transition: all 0.2s ease;

    &:hover {
      border-color: #fff;
    }
  }

  option {
    background: #161620;
    font-size: 1.8rem;
  }

  @media (max-width: 960px) {
    select,
    option {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 500px) {
    select,
    option {
      font-size: 1.4rem;
    }
  }
`;
