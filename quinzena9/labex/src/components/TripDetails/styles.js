import styled from 'styled-components';

export const TripDetailsContainer = styled.section``;

export const TripInfo = styled.div`
  padding: 4rem 0;

  span {
    font-size: 2rem;
    font-weight: 500;
    color: #d0d6f9;
  }

  @media (max-width: 600px) {
    span {
      font-size: 1.8rem;
    }
  }
`;

export const ListCanditadesContainer = styled.div`
  padding: 4rem 0;

  h5 {
    margin-bottom: 4rem;
  }

  button {
    width: 100%;
    padding: 0.5rem 2rem;
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
