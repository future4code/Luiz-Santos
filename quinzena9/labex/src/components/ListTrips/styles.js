import styled from 'styled-components';

export const ListTripsContainer = styled.section``;

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

  @media (max-width: 768px) {
    table {
      th {
        font-size: 1.5rem;
      }

      td {
        font-size: 1.4rem;
      }

      th,
      td {
        &:nth-child(1) {
          display: none;
        }
        &:nth-child(3) {
          display: none;
        }
        &:nth-child(4) {
          display: none;
        }
        &:nth-child(5) {
          display: none;
        }
      }
    }
  }
`;
