import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 20rem);

  padding: 3rem 2rem 2rem;
  overflow-y: auto;
  position: relative;

  @media (max-width: 1400px) {
    height: calc(100vh - 10rem);
  }

  button {
    background: none;
    border: none;
    font-size: 1.6rem;
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    padding: 0.8rem 1rem;
    color: #757f9a;
    font-weight: 600;
    cursor: pointer;

    &:disabled {
      color: #eee;
      cursor: initial;
    }
  }
`;

export const MatchInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const ContainerImg = styled.div`
  width: 100%;
  max-width: 8rem;
  height: 8rem;

  overflow: hidden;
  border: 4px solid transparent;
  background-image: linear-gradient(
    to right,
    #dd5e89 0%,
    #f7bb97 51%,
    #dd5e89 100%
  );
  background-position: right center;
  transition: all 0.2s ease;
  background-size: 200% auto;
  border-radius: 50%;

  &:hover {
    background-position: right center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
