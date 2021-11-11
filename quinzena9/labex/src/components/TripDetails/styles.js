import styled from 'styled-components';

export const TripDetailsContainer = styled.section`
  h5 {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.4rem;

    letter-spacing: 4.725px;
    text-transform: uppercase;
  }
`;

export const TripInfo = styled.div`
  padding: 4rem 0;

  p {
    font-size: 1.6rem;
    line-height: 3.2rem;

    span {
      font-size: 2rem;
      font-weight: 500;
      color: #d0d6f9;
    }
  }
`;

export const ListCanditadesContainer = styled.div`
  padding: 4rem 0;

  h5 {
    margin-bottom: 4rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.8rem;

    th {
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      text-transform: uppercase;
      color: #d0d6f9;
      font-weight: 500;

      &:last-child {
        text-align: center;
      }
    }

    td {
      padding: 1.5rem 2rem;
      border: 0;
      background: #2f303a;

      &:last-child {
        text-align: center;
      }
    }
  }

  button {
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
