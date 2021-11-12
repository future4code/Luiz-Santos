import styled from 'styled-components';

export const TableContainer = styled.table`
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
`;
