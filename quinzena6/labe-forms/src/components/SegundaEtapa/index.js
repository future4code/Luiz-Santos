import React, { Component } from 'react';
import styled from 'styled-components';
import PerguntaAberta from '../PerguntaAberta';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

class SegundaEtapa extends Component {
  render() {
    return (
      <Container>
        <Title>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Title>

        <PerguntaAberta pergunta='5- Qual seu nome?' />
        <PerguntaAberta pergunta='6- Qual a sua idade?' />
      </Container>
    );
  }
}

export default SegundaEtapa;
