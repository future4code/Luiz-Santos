import styled from 'styled-components';

export const ListTripsContainer = styled.section`
  h5 {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.4rem;

    letter-spacing: 4.725px;
    text-transform: uppercase;
  }
`;

export const ListTripsContent = styled.div`
  padding: 4rem 0;
  table {
    width: 100%;
    border-spacing: 0 0.8rem;

    th {
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      text-transform: uppercase;
      font-weight: 500;
      color: #d0d6f9;
    }

    td {
      padding: 2rem;
      border: 0;
      background: #2f303a;

      &:last-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      a {
        color: #d0d6f9;
        transition: all 0.2s ease;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
