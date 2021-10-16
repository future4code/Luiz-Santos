import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  width: 100%;
  flex: 25% 0 1;
  height: 100vh;
  padding: 40px 20px;

  background: #323232;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid #494d4b;
`;

export const PlayerContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InfoMusic = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  gap: 20px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5px;
  }

  .nome-musica {
    color: #fff;
    font-size: 17px;
    font-weight: 700;
  }

  .nome-artista {
    color: #aaa;
    font-size: 15px;
    font-weight: 700;
  }

  @media (min-width: 1400px) {
    img {
      height: 450px;
    }
  }
`;

export const PlayerHeader = styled.div`
  width: 100%;
  margin-top: 40px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    color: #e6e8eb;
    font-size: 17px;

    /* gap: 10px; */
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const PlayerControls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* background: red; */

  button {
    background: none;
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background: #422e4e;
    }

    &:disabled {
      cursor: initial;
      svg {
        fill: #666;
      }
    }

    svg {
      transition: all 0.2s ease;
    }

    &:hover svg {
      transform: scale(1.1);
    }
  }
`;
