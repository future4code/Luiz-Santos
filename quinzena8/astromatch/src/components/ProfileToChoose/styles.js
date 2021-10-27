import styled from 'styled-components';

export const ProfileContainer = styled.div`
  min-width: 100%;
  height: calc(100vh - 20rem);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  /* padding: 2rem 0 2rem; */

  @media (max-width: 1400px) {
    height: calc(100vh - 10rem);
  }
`;
