import React from 'react';
import styled from 'styled-components';

import { IconeComContador } from '../IconeComContador/IconeComContador';

import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';
import iconeCompartilharBlack from '../../img/share-black.svg';
import iconeSalvarBlack from '../../img/bookmark_black.svg';
import iconeSalvarWhite from '../../img/bookmark.svg';

import { SecaoComentario } from '../SecaoComentario/SecaoComentario';
import { IconeCompartilhamento } from '../IconeComparilhamento/IconeCompartilhamento';
import { IconeSalvar } from '../IconeSalvar/IconeSalvar';
import Modal from '../Modal/Modal';

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  position: relative;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    postSalvo: false,
    compartilhando: false,
  };

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    });
    if (this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
      });
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
      });
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  onClickSalvar = () => {
    this.setState({
      postSalvo: !this.state.postSalvo,
    });
  };

  onClickCompartilhar = (event) => {
    this.setState({
      compartilhando: true,
    });
  };

  onClickFacebookIcon = () => {
    console.log('Post compartilhado no Facebook');
    this.setState({
      compartilhando: false,
    });
  };

  onClickTwitterIcon = () => {
    console.log('Post compartilhado no Twitter');
    this.setState({
      compartilhando: false,
    });
  };

  onClickInstagramIcon = () => {
    console.log('Post compartilhado no Instagram');
    this.setState({
      compartilhando: false,
    });
  };

  onclickCloseModal = () => {
    this.setState({
      compartilhando: false,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let iconeSalvar;

    if (this.state.postSalvo) {
      iconeSalvar = iconeSalvarBlack;
    } else {
      iconeSalvar = iconeSalvarWhite;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let componenteModal;
    if (this.state.compartilhando) {
      componenteModal = (
        <Modal
          onclickCloseModal={this.onclickCloseModal}
          onClickFacebookIcon={this.onClickFacebookIcon}
          onClickTwitterIcon={this.onClickTwitterIcon}
          onClickInstagramIcon={this.onClickInstagramIcon}
        />
      );
    }

    return (
      <PostContainer>
        {componenteModal}
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />
          <IconeCompartilhamento
            icone={iconeCompartilharBlack}
            onClickCompartilhar={this.onClickCompartilhar}
          />
          <IconeSalvar icone={iconeSalvar} onClickSalvar={this.onClickSalvar} />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}
      </PostContainer>
    );
  }
}

export default Post;
