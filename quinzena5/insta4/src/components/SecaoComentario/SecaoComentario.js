import React, { Component } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

const ListaComentarios = styled.div`
  padding: 0 10px;
  font-size: 14px;

  p {
    margin-bottom: 5px;
  }
`;

export class SecaoComentario extends Component {
  state = {
    comentario: '',
  };

  onChangeComentario = (event) => {
    this.setState({
      comentario: event.target.value,
    });
  };

  render() {
    return (
      <>
        <CommentContainer>
          <InputComentario
            placeholder={'Comentário'}
            value={this.state.comentario}
            onChange={this.onChangeComentario}
          />
          <button onClick={() => this.props.aoEnviar(this.state.comentario)}>
            Enviar
          </button>
        </CommentContainer>
        <ListaComentarios>
          {this.props.listaComentarios.map((comentario) => (
            <p>{comentario}</p>
          ))}
        </ListaComentarios>
      </>
    );
  }
}
