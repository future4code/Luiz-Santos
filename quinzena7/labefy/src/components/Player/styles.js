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

  @media (max-width: 960px) {
    position: fixed;
    bottom: 0;
    width: calc(100% - 17px);
    height: auto;
    padding: 20px 10px 0;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PlayerContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    justify-content: flex-end;
  }
`;

export const InfoMusic = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  gap: 20px;

  .capa-musica {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 960px) {
      display: none;
    }
  }

  .details-container {
    display: flex;
    align-items: center;

    gap: 10px;

    img {
      display: none;
    }

    .info-artista {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
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

  @media (max-width: 960px) {
    .details-container {
      img {
        display: block;
      }

      .info-artista {
        flex-direction: row;
        gap: 10px;
      }

      .nome-musica {
        font-size: 15px;
      }

      .nome-artista {
        padding-left: 10px;
        border-left: 1px solid #808080;
        font-size: 14px;
      }
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
  }

  img {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 960px) {
    display: none;
    margin-top: 0;
  }
`;

export const PlayerControls = styled.div`
  width: 100%;

  button {
    background: none;
    border: none;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    cursor: pointer;

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

    @media (max-width: 600px) {
      width: 28px;
      height: 28px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  & .rhap_container {
    background: #323232;
    box-shadow: none;
    color: #fff;

    .rhap_time {
      color: #fff;
    }

    .rhap_progress-indicator {
      background: #04d361;
    }

    .rhap_volume-indicator {
      background: #04d361;
    }

    @media (max-width: 600px) {
      font-size: 14px !important;
    }
  }
`;
