import styled from 'styled-components';

export const Music = styled.div`
  width: 100%;
  padding: 10px 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid #494d4b;
`;

export const MusicDetails = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 100%;
    max-width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 10px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;

    .musica-artist {
      font-size: 15px;
      color: #04d361;
      font-style: italic;
      font-weight: 300;
      border-left: 1px solid #494d4b;
      padding-left: 15px;
      transition: all 0.2s ease;

      &:hover {
        color: #04d361;
      }
    }
  }

  @media (max-width: 600px) {
    img {
      width: 36px;
      height: 36px;
    }

    .musica-artist {
      display: none;
    }

    .musica-name {
      font-size: 14px;
    }
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const DeleteMusicButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;

  svg {
    transition: all 0.2s ease;
  }

  &:hover {
    svg {
      fill: red;
    }
  }

  @media (max-width: 600px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const PlayButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;

  @media (max-width: 600px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
