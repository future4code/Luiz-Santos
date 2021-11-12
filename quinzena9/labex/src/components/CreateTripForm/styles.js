import styled from 'styled-components';

export const CreateTripContainer = styled.section`
  h5 {
    margin-bottom: 4rem;
  }

  form {
    padding: 2rem 0;
    max-width: 60rem;
  }

  button {
    /* width: 100%; */
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

  @media (max-width: 600px) {
    form {
      max-width: 100%;
    }

    button {
      width: 100%;
      font-size: 1.4rem;
    }
  }
`;
