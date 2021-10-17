import React, { createRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
  AiFillPlaySquare,
  AiFillPauseCircle,
  AiFillStepBackward,
  AiFillStepForward,
  AiFillSound,
} from 'react-icons/ai';
import { IoVolumeMuteSharp } from 'react-icons/io5';
import { ImLoop } from 'react-icons/im';

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
  // const audioRef = useRef();
  const audioRef = createRef(new Audio(music?.url));

  function playAudio() {
    const audioPromise = audioRef.current.audio.current.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then((_) => {
          // autoplay started
          console.log('Play musica');
        })
        .catch((err) => {
          // catch dom exception
          console.log('Erro Play Audio', err);
        });
    }
  }

  useEffect(() => {
    // audioRef.current.audio.current.load();
    if (!audioRef.current.audio) {
      return;
    }

    if (isPlaying) {
      playAudio();
    } else {
      audioRef.current.audio.current.pause();
      console.log('Audio pause');
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
          <img
            src={!music ? capaMusica1 : capaMusica2}
            alt='Capa'
            className='capa-musica'
          />
          <div className='details-container'>
            <img src={logo} alt='Fone de ouvido' />
            <div className='info-artista'>
              <span className='nome-musica'>{music?.name}</span>
              <span className='nome-artista'>{music?.artist}</span>
            </div>
          </div>
        </S.InfoMusic>
        <S.PlayerControls>
          {music && (
            <AudioPlayer
              ref={audioRef}
              src={music?.url}
              autoPlay={isPlaying}
              onPlay={() => onPlay()}
              onPause={() => onPause()}
              onEnded={handleMusicEnded}
              showSkipControls={true}
              showJumpControls={false}
              onClickNext={playNext}
              onClickPrevious={playPrevious}
              // customAdditionalControls={[]}
              customIcons={{
                play: <AiFillPlaySquare color='#04d361' size={64} />,
                pause: <AiFillPauseCircle color='#04d361' size={64} />,
                next: <AiFillStepForward color='#04d361' size={28} />,
                previous: <AiFillStepBackward color='#04d361' size={28} />,
                volume: <AiFillSound color='#04d361' size={22} />,
                volumeMute: <IoVolumeMuteSharp color='#868686' size={22} />,
                loop: <ImLoop color='#04d361' size={22} />,
              }}
            />
          )}
        </S.PlayerControls>
      </S.PlayerContent>
    </S.PlayerWrapper>
  );
};

export default Player;
