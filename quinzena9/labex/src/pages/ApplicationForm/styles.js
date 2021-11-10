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

  h5 {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.4rem;

    letter-spacing: 4.725px;
    text-transform: uppercase;
  }
`;

export const FormContainer = styled.form`
  padding: 7.6rem 0;
  width: 100%;
  max-width: 60rem;

  button {
    width: 18rem;
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
  }
`;
export const FormGroupSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  label {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.9rem;
    letter-spacing: 2.7px;
    margin-bottom: 0.5rem;
  }

  select {
    display: inline-block;
    font-family: inherit;
    font-size: 1.6rem;
    padding: 1rem 0;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    color: #fff;
    transition: all 0.2s ease;

    &:hover {
      border-color: #fff;
    }
  }

  option {
    background: #161620;
    font-size: 1.6rem;
  }
`;
