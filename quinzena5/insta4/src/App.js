import React from 'react';
import styled from 'styled-components';
import Modal from './components/Modal/Modal';
import Post from './components/Post/Post';

import foto1 from './img/cat2.jpg';
import foto2 from './img/cat6.jpg';
import foto3 from './img/dog11.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const FormContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  input,
  button {
    padding: 5px 10px;
    font-size: 16px;
  }

  button {
    padding: 8px 10px;
    width: 100%;
    background: #222;
    border: none;
    color: #fff;
    cursor: pointer;
  }
`;

class App extends React.Component {
  state = {
    posts: [
      {
        usuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: foto1,
      },
      {
        usuario: 'luiza',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: foto2,
      },
      {
        usuario: 'maria',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: foto3,
      },
    ],
    nome: '',
    fotoUsuario: '',
    fotoPost: '',
  };

  adicionaPost = () => {
    const novoPost = {
      usuario: this.state.nome,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };

    this.setState({
      posts: [...this.state.posts, novoPost],
      nome: '',
      fotoUsuario: '',
      fotoPost: '',
    });
  };

  render() {
    return (
      <MainContainer>
        <FormContainer>
          <input
            type='text'
            placeholder='Nome usuario'
            value={this.state.nome}
            onChange={(event) => this.setState({ nome: event.target.value })}
          />
          <input
            type='text'
            placeholder='Link da foto do usuário'
            value={this.state.fotoUsuario}
            onChange={(event) =>
              this.setState({ fotoUsuario: event.target.value })
            }
          />
          <input
            type='text'
            placeholder='Link da foto do post'
            value={this.state.fotoPost}
            onChange={(event) =>
              this.setState({ fotoPost: event.target.value })
            }
          />
          <button onClick={this.adicionaPost}>Postar</button>
        </FormContainer>
        {this.state.posts.map((post, index) => {
          return (
            <div key={index}>
              <Post
                nomeUsuario={post.usuario}
                fotoUsuario={post.fotoUsuario}
                fotoPost={post.fotoPost}
              />
            </div>
          );
        })}
      </MainContainer>
    );
  }
}

export default App;
