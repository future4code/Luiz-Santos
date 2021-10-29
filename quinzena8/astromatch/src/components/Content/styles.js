import styled from 'styled-components';

export const MainContainer = styled.main`
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  width: 100%;
  max-width: 45rem;
  height: 90%;

  @media (max-width: 500px) {
    max-width: 30rem;
  }
`;
