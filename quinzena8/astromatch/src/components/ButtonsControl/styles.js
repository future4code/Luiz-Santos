import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  align-self: flex-end;
  width: 100%;
  max-width: 40rem;
  height: 15%;
  padding: 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1400px) {
    height: 20%;
  }
`;

export const CustomButton = styled.button`
  background: none;
  border: none;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: block;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
    background: #dedbe4;
  }

  img {
    height: 3rem;
    width: 3rem;
  }

  &.btn-favorite {
    background-image: linear-gradient(
      to right,
      #dd5e89 0%,
      #f7bb97 51%,
      #dd5e89 100%
    );

    width: 6rem;
    height: 6rem;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 20px #eee;

    img {
      height: 3.2rem;
      width: 3.2rem;
    }

    &:hover {
      background-position: right center;
    }
  }
`;
