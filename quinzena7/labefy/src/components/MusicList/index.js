import React from 'react';
import {
  AiFillDelete,
  AiFillPauseCircle,
  AiFillPlaySquare,
} from 'react-icons/ai';

import * as S from './styles';

const capaMusica = 'https://images3.alphacoders.com/172/172007.jpg';

const MusicList = ({
  listOfMusic,
  curentMusic,
  isPlaying,
  currentPlaylist,
  playList,
  togglePlay,
  deleteTrack,
}) => {
  return (
    <>
      {listOfMusic &&
        listOfMusic.map((music, index) => (
          <S.Music key={music.id}>
            <S.MusicDetails>
              <img src={capaMusica} alt='' />
              <div>
                <span className='musica-name'> {music.name}</span>
                <span className='musica-artist'> {music.artist}</span>
              </div>
            </S.MusicDetails>

            <S.ControlsContainer>
              <S.PlayButton>
                {curentMusic !== music && (
                  <AiFillPlaySquare
                    color='#04d361'
                    size={24}
                    onClick={() => playList(listOfMusic, index)}
                  />
                )}
                {!isPlaying && curentMusic === music && (
                  <AiFillPlaySquare
                    color='#04d361'
                    size={24}
                    onClick={() => playList(listOfMusic, index)}
                  />
                )}
                {isPlaying && curentMusic === music && (
                  <AiFillPauseCircle
                    color='#04d361'
                    size={24}
                    onClick={() => togglePlay()}
                  />
                )}
              </S.PlayButton>
              <S.DeleteMusicButton
                onClick={() => deleteTrack(currentPlaylist.id, music.id)}
              >
                <AiFillDelete size={24} color='#808080' />
              </S.DeleteMusicButton>
            </S.ControlsContainer>
          </S.Music>
        ))}
    </>
  );
};

export default MusicList;
