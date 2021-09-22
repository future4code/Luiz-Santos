import React, { Component } from 'react';
import styled from 'styled-components';
import PerguntaAberta from '../PerguntaAberta';
import PerguntaFechada from '../PerguntaFechada';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

class PrimeiraEtapa extends Component {
  render() {
    return (
      <Container>
        <Title>ETAPA 1 - DADOS GERAIS</Title>

        <PerguntaAberta pergunta='1. Qual o seu nome?' />
        <PerguntaAberta pergunta='2. Qual sua idade?' />
        <PerguntaAberta pergunta='3. Qual seu email?' />
        <PerguntaFechada
          pergunta='"4. Qual a sua escolaridade?"'
          opcoes={[
            'Ensino médio incompleto',
            'Ensino médio completo',
            'Ensino superior incompleto',
            'Ensino superior completo',
          ]}
        />
      </Container>
    );
  }
}

export default PrimeiraEtapa;
