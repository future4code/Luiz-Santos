import React, { Component } from 'react';
import {
  AiFillPlaySquare,
  AiFillPauseCircle,
  AiFillDelete,
} from 'react-icons/ai';
import { GiMusicalNotes } from 'react-icons/gi';
import api from '../../services/api';

import capa from '../../img/playlist-capa.jpg';
import * as S from './styles';
import Player from '../Player';
import Header from '../Header';
// import capaMusica from '../../img/capa-musica.png';
const capaMusica = 'https://images3.alphacoders.com/172/172007.jpg';

class Content extends Component {
  state = {
    listMusic: [],
    playlists: [],
    currentMusicIndex: 0,
    isPlaying: false,
    isActivePlaylist: false,
    isActiveForm: false,
    isActiveFormAddMusic: false,
    isActivePlaylistGroup: true,
    inputPlaylistName: '',
    currentPlaylist: {},
    musicName: '',
    artistName: '',
    musicUrl: '',
  };

  play = (music) => {
    this.setState({
      listMusic: [music],
      currentMusicIndex: 0,
      isPlaying: true,
    });
  };

  playList = (list, index) => {
    this.setState({
      listMusic: list,
      currentMusicIndex: index,
      isPlaying: true,
    });
  };

  togglePlay = () => {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  };

  playNext = () => {
    if (this.state.currentMusicIndex + 1 < this.state.listMusic.length) {
      this.setState({
        currentMusicIndex: this.state.currentMusicIndex + 1,
      });
    }
  };

  playPrevious = () => {
    if (this.state.currentMusicIndex > 0) {
      this.setState({
        currentMusicIndex: this.state.currentMusicIndex - 1,
      });
    }
  };

  clearPlayingState = () => {
    this.setState({
      // listMusic: [],
      currentMusicIndex: 0,
    });
  };

  setPlayingState = (state) => {
    this.setState({
      isPlaying: state,
    });
  };

  handleMusicEnded = () => {
    if (this.state.currentMusicIndex + 1 < this.state.listMusic.length) {
      this.playNext();
    } else {
      this.clearPlayingState();
    }
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async () => {
    try {
      const response = await api.get('/playlists');
      console.log(response.data.result.list);

      this.setState({
        playlists: response.data.result.list,
      });
    } catch (err) {
      console.log(err);
    }
  };

  addNewPlaylist = async (event) => {
    event.preventDefault();
    const body = {
      name: this.state.inputPlaylistName,
    };

    try {
      const response = await api.post('/playlists', body);

      if (response.status === 200) {
        this.setState({ inputPlaylistName: '' });
        this.getAllPlaylists();
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  deletePlaylist = async (playlistId) => {
    const confirm = window.confirm('Deseja excluir esta playlist?');
    try {
      if (!confirm) {
        return;
      }
      const response = await api.delete(`/playlists/${playlistId}`);

      if (response.status === 200) {
        this.getAllPlaylists();
      }
      console.log(response);
    } catch (err) {
      alert('Ocorreu um erro, tente novamente mais tarde', err);
      console.log(err);
    }
  };

  getPlaylistTracks = async (playlistId, playslistName) => {
    try {
      const response = await api.get(`/playlists/${playlistId}/tracks`);
      const result = await api.get(`/playlists/search?name=${playslistName}`);

      const playlist = result.data.result.playlist.find(
        (item) => item.id === playlistId
      );

      if (response.data.result.tracks.length === 0) {
        this.setState({
          isActivePlaylist: true,
          isActivePlaylistGroup: false,
          currentPlaylist: playlist,
          listMusic: [],
          isPlaying: false,
        });
        return;
      } else {
        this.setState({
          listMusic: response.data.result?.tracks,
          isActivePlaylist: true,
          isActivePlaylistGroup: false,
          currentPlaylist: playlist,
        });

        if (this.state.isPlaying) {
          this.setState({
            currentMusicIndex: 0,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  addTrackInPlaylist = async (event) => {
    event.preventDefault();
    const playlistId = this.state.currentPlaylist.id;
    const body = {
      name: this.state.musicName,
      artist: this.state.artistName,
      url: this.state.musicUrl,
    };
    try {
      const response = await api.post(`/playlists/${playlistId}/tracks`, body);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  deleteTrack = async (playlistId, trackId) => {
    const confirm = window.confirm('Deseja excluir esta música?');
    const playlistName = this.state.currentPlaylist.name;
    try {
      if (!confirm) {
        return;
      }
      const response = await api.delete(
        `/playlists/${playlistId}/tracks/${trackId}`
      );

      if (response.status === 200) {
        this.getPlaylistTracks(playlistId, playlistName);
      }
      console.log('Delete musica', response);
    } catch (err) {
      alert('Ocorreu um erro, tente novamente mais tarde', err);
      console.log(err);
    }
  };

  render() {
    const curentMusic = this.state.listMusic[this.state.currentMusicIndex];

    const hasNext =
      this.state.currentMusicIndex + 1 < this.state.listMusic.length;
    const hasPrevious = this.state.currentMusicIndex > 0;

    return (
      <S.Container>
        <main>
          <Header />

          <S.SectionContainer>
            {this.state.isActiveForm && (
              <S.FormContainer>
                <button
                  className='btn-voltar'
                  onClick={() =>
                    this.setState({
                      isActiveForm: false,
                      isActivePlaylistGroup: true,
                    })
                  }
                >
                  Voltar
                </button>
                <h2>Nova playlist</h2>
                <form onSubmit={this.addNewPlaylist}>
                  <label htmlFor=''>Nome</label>
                  <input
                    type='text'
                    required
                    value={this.state.inputPlaylistName}
                    onChange={(event) =>
                      this.setState({ inputPlaylistName: event.target.value })
                    }
                  />
                  <button>Adicionar</button>
                </form>
              </S.FormContainer>
            )}
            {this.state.isActivePlaylistGroup && (
              <>
                <S.ContentHeader>
                  <S.Title>Playlists</S.Title>
                  <S.CustomButton
                    onClick={() =>
                      this.setState({
                        isActiveForm: true,
                        isActivePlaylistGroup: false,
                      })
                    }
                  >
                    + Nova Playlist
                  </S.CustomButton>
                </S.ContentHeader>
                <S.PlaylistContainer>
                  {this.state.playlists &&
                    this.state.playlists.map((playList) => (
                      <S.CardPlaylist key={playList.id}>
                        <S.CardPlaylistImg
                          src={capa}
                          alt='Minha playlist'
                          onClick={() =>
                            this.getPlaylistTracks(playList.id, playList.name)
                          }
                        />
                        <S.ContainerTitle>
                          <S.PlaylistTitle>{playList.name}</S.PlaylistTitle>
                          <S.ButtonDelete
                            onClick={() => this.deletePlaylist(playList.id)}
                          >
                            <AiFillDelete size={20} color='#808080' />
                          </S.ButtonDelete>
                        </S.ContainerTitle>
                      </S.CardPlaylist>
                    ))}
                </S.PlaylistContainer>
              </>
            )}

            {this.state.isActivePlaylist && (
              <S.ContentPlaylist>
                <S.PlaylistHeader>
                  <S.TitlePlaylist>
                    {this.state.currentPlaylist.name}
                  </S.TitlePlaylist>
                  <button
                    onClick={() =>
                      this.setState({
                        isActivePlaylist: false,
                        isActivePlaylistGroup: true,
                      })
                    }
                  >
                    Voltar
                  </button>
                </S.PlaylistHeader>

                <S.CapaPlaylist>
                  <img src={capaMusica} alt='capa' />
                </S.CapaPlaylist>

                <S.AddMusicContainer>
                  <S.AddMusicButton>
                    <GiMusicalNotes size={24} color='#808080' />
                    <button
                      onClick={() =>
                        this.setState({
                          isActiveFormAddMusic: true,
                        })
                      }
                    >
                      Adiconar musica
                    </button>
                  </S.AddMusicButton>

                  {this.state.isActiveFormAddMusic && (
                    <form onSubmit={this.addTrackInPlaylist}>
                      <S.FormGroup>
                        <label htmlFor=''>Nome da música</label>
                        <input
                          type='text'
                          required
                          value={this.state.musicName}
                          onChange={(event) =>
                            this.setState({ musicName: event.target.value })
                          }
                        />
                      </S.FormGroup>
                      <S.FormGroup>
                        <label htmlFor=''>Nome do cantor(a)</label>
                        <input
                          type='text'
                          required
                          value={this.state.artistName}
                          onChange={(event) =>
                            this.setState({ artistName: event.target.value })
                          }
                        />
                      </S.FormGroup>
                      <S.FormGroup>
                        <label htmlFor=''>Link da música</label>
                        <input
                          type='url'
                          required
                          value={this.state.musicUrl}
                          onChange={(event) =>
                            this.setState({ musicUrl: event.target.value })
                          }
                        />
                      </S.FormGroup>
                      <S.BtnGroup>
                        <button
                          type='button'
                          className='btn-cancelar'
                          onClick={() =>
                            this.setState({
                              isActiveFormAddMusic: false,
                            })
                          }
                        >
                          Cancelar
                        </button>
                        <button type='submit'>Adiconar</button>
                      </S.BtnGroup>
                    </form>
                  )}
                </S.AddMusicContainer>
                <S.ListMusic>
                  {this.state.listMusic.map((music, index) => (
                    <S.Music key={music.id}>
                      <S.MusicDetails>
                        <img src={capaMusica} alt='' />
                        <div>
                          <span> {music.name}</span>
                          <span className='musica-artist'> {music.artist}</span>
                        </div>
                      </S.MusicDetails>

                      <S.ControlsContainer>
                        <S.PlayButton>
                          {curentMusic !== music && (
                            <AiFillPlaySquare
                              color='#04d361'
                              size={24}
                              onClick={() =>
                                this.playList(this.state.listMusic, index)
                              }
                            />
                          )}
                          {!this.state.isPlaying && curentMusic === music && (
                            <AiFillPlaySquare
                              color='#04d361'
                              size={24}
                              onClick={() =>
                                this.playList(this.state.listMusic, index)
                              }
                            />
                          )}
                          {this.state.isPlaying && curentMusic === music && (
                            <AiFillPauseCircle
                              color='#04d361'
                              size={24}
                              onClick={() => this.togglePlay()}
                            />
                          )}
                        </S.PlayButton>
                        <S.DeleteMusicButton
                          onClick={() =>
                            this.deleteTrack(
                              this.state.currentPlaylist.id,
                              music.id
                            )
                          }
                        >
                          <AiFillDelete size={24} color='#808080' />
                        </S.DeleteMusicButton>
                      </S.ControlsContainer>
                    </S.Music>
                  ))}
                </S.ListMusic>
              </S.ContentPlaylist>
            )}
          </S.SectionContainer>
        </main>
        {/* {curentMusic && ( */}
        <Player
          music={curentMusic}
          isPlaying={this.state.isPlaying}
          onPlay={() => this.setPlayingState(true)}
          onPause={() => this.setPlayingState(false)}
          togglePlay={this.togglePlay}
          playNext={this.playNext}
          playPrevious={this.playPrevious}
          handleMusicEnded={this.handleMusicEnded}
          clearPlayingState={this.clearPlayingState}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          playlistName={this.state.currentPlaylist?.name}
        />
        {/* )} */}
      </S.Container>
    );
  }
}

export default Content;
