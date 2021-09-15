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
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={foto1}
        />
        <Post
          nomeUsuario={'luiza'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={foto2}
        />
        <Post
          nomeUsuario={'maria'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={foto3}
        />
      </MainContainer>
    );
  }
}

export default App;
