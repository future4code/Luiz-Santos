import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }
`;

export const SectionContainer = styled.section`
  padding: 60px 40px;
  height: calc(100vh - 80px);

  overflow-y: scroll;
`;

export const FormContainer = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  h2 {
    font-size: 32px;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  label {
    margin-bottom: 8px;
  }

  input,
  button {
    display: block;
    font-size: 16px;
    margin-bottom: 20px;
    background: none;
    border: none;
    border: 1px solid #494d4b;
    padding: 5px 10px;
    border-radius: 15px;
    color: #fff;
    transition: all 0.2 ease;

    &:hover,
    &:focus {
      border-color: #04d361;
    }
  }

  button {
    background: #04d361;
    padding: 8px 15px;
    border: none;
    cursor: pointer;
  }

  .btn-voltar {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 120px;
    background: none;
    border: 1px solid #04d361;
    border-radius: 10px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 28px;
`;

export const CustomButton = styled.button`
  font-size: 16px;
  background: none;
  border: none;
  border: 1px solid #04d361;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background: #04d361;
  }
`;

export const PlaylistContainer = styled.div`
  /* display: flex;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 20px;

  /* background: red; */

  @media (min-width: 1400px) {
    grid-template-columns: repeat(6, minmax(200px, 1fr));
  }
`;

export const CardPlaylist = styled.div`
  width: 200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const CardPlaylistImg = styled.img`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 200px;
  border-radius: 15px;
  background: red;
  overflow: hidden;
  margin-bottom: 10px;
  object-fit: cover;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlaylistTitle = styled.h3`
  font-size: 18px;
  text-align: center;
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  transition: all 0.2s ease;

  svg {
    transition: all 0.2s ease;
  }

  &:hover svg {
    fill: red;
  }
`;

// playlist unica

export const ContentPlaylist = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
  /* flex: 1 1 60%; */
  /* cursor: pointer; */
`;

export const PlaylistHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  button {
    padding: 8px 15px;
    border: none;
    cursor: pointer;
    color: #fff;
    min-width: 120px;
    background: none;
    border: 1px solid #04d361;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.2s ease;

    &:hover {
      background: #04d361;
    }
  }
`;

export const TitlePlaylist = styled.h2`
  font-size: 24px;
`;

export const CapaPlaylist = styled.div`
  width: 100%;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const AddMusicContainer = styled.div`
  margin-bottom: 40px;
  form {
    width: 400px;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    display: block;
    font-size: 16px;
    background: none;
    border: none;
    border: 1px solid #494d4b;
    padding: 5px 10px;
    border-radius: 15px;
    color: #fff;
    transition: all 0.2 ease;

    &:hover,
    &:focus {
      border-color: #04d361;
    }
  }

  &:nth-last-child(2) {
    margin-bottom: 40px;
  }
`;

export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    width: 100%;
    background: #04d361;
    font-size: 16px;
    padding: 8px 15px;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    color: #fff;
  }

  .btn-cancelar {
    background: none;
    border: 1px solid #04d361;
  }
`;

export const AddMusicButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.2 ease;

  &:hover {
    button {
      color: #04d361;
    }

    svg {
      fill: #04d361;
    }
  }

  button {
    font-size: 16px;
    background: none;
    border: none;
    color: #b0b0b0;
    cursor: pointer;
    padding: 8px;
  }
`;

export const ListMusic = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

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
      /* color: #afb2b1; */
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
`;

export const PlayButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;
// Player

// export const PlayerWrapper = styled.div`
//   width: 100%;
//   /* display: flex;
//   align-items: center;
//   gap: 40px;
//   padding: 20px; */
//   background: #202020;
//   /* border: 1px solid blue; */
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   margin: 0 auto;
// `;

// export const PlayerContent = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   display: flex;
//   align-items: center;
//   gap: 40px;
//   padding: 20px;

//   margin: 0 auto;
// `;

// export const InfoMusic = styled.div`
//   min-width: 20%;
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   img {
//     width: 100%;
//     max-width: 50px;
//     height: 50px;
//     object-fit: cover;
//     border-radius: 10px;
//   }

//   & > div {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;

//     gap: 5px;
//   }

//   .nome-musica {
//     color: #fff;
//     font-size: 17px;
//     font-weight: 700;
//   }

//   .nome-artista {
//     color: #aaa;
//     font-size: 15px;
//     font-weight: 700;
//   }
// `;

// export const PlayerControls = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   /* background: red; */

//   button {
//     background: none;
//     border: none;
//     width: 48px;
//     height: 48px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: all 0.2s ease;
//     cursor: pointer;

//     svg {
//       transition: all 0.2s ease;
//     }

//     &:hover {
//       background: #422e4e;
//     }

//     &:hover svg {
//       transform: scale(1.1);
//     }
//   }
// `;
