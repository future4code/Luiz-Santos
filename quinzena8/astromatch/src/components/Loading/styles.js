import styled from 'styled-components';

export const LoadingContainer = styled.div`
  height: calc(100vh - 20rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    height: calc(100vh - 10rem);
  }
`;

export const Spinner = styled.div`
  background: #dd5e89;
  height: 100px;
  transform: rotate(-45deg);
  width: 100px;
  position: relative;
  animation: pulse-animation 2s infinite;

  &:before,
  &:after {
    content: '';
    background: #dd5e89;
    border-radius: 50%;
    height: 100px;
    position: absolute;
    width: 100px;
  }

  &:before {
    top: -50px;
  }

  &:after {
    left: 50px;
  }

  @keyframes pulse-animation {
    0% {
      transform: rotate(-45deg) scale(0);
    }

    100% {
      transform: rotate(-45deg) scale(1);
    }
  }
`;
