import React, { useEffect, useRef } from 'react';

import {
  AiFillPlaySquare,
  AiFillPauseCircle,
  AiFillStepBackward,
  AiFillStepForward,
} from 'react-icons/ai';

import * as S from './styles';
import capaMusica1 from '../../img/playlist-capa.jpg';
import logo from '../../img/playing.svg';

const capaMusica2 = 'https://images3.alphacoders.com/172/172007.jpg';

const Player = ({
  music,
  isPlaying,
  onPlay,
  onPause,
  togglePlay,
  playNext,
  playPrevious,
  handleMusicEnded,
  hasNext,
  hasPrevious,
  playlistName,
}) => {
  const audioRef = useRef();
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <S.PlayerWrapper>
      <S.PlayerContent>
        <S.InfoMusic>
          <S.PlayerHeader>
            <span>
              <img src={logo} alt='Fone de ouvido' />
              {playlistName}
            </span>
          </S.PlayerHeader>
          <img src={!music ? capaMusica1 : capaMusica2} alt='Capa' />
          <div>
            <span className='nome-musica'>{music?.name}</span>
            <span className='nome-artista'>{music?.artist}</span>
          </div>
        </S.InfoMusic>
        <S.PlayerControls>
          {music && (
            <audio
              ref={audioRef}
              autoPlay={isPlaying}
              src={music?.url}
              onPlay={onPlay}
              onPause={onPause}
              onEnded={handleMusicEnded}
              // onLoadedMetadata={setupProgessListener}
            />
          )}
          <button disabled={!music || !hasPrevious}>
            <AiFillStepBackward
              color='#04d361'
              size={28}
              onClick={playPrevious}
            />
          </button>
          <button disabled={!music}>
            {!isPlaying ? (
              <AiFillPlaySquare
                color='#04d361'
                size={64}
                onClick={togglePlay}
              />
            ) : (
              <AiFillPauseCircle
                color='#04d361'
                size={64}
                onClick={togglePlay}
              />
            )}
          </button>
          <button disabled={!music || !hasNext}>
            <AiFillStepForward color='#04d361' size={28} onClick={playNext} />
          </button>
        </S.PlayerControls>
      </S.PlayerContent>
    </S.PlayerWrapper>
  );
};

export default Player;
