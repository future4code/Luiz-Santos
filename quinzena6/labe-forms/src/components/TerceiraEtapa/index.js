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

class TerceiraEtapa extends Component {
  render() {
    return (
      <Container>
        <Title>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Title>
        <PerguntaAberta pergunta='7- Por que você não terminou um curso de graduação?' />
        <PerguntaFechada
          pergunta='8- Você fez algum curso complementar?'
          opcoes={['Nenhum', 'Curso Técnico', 'Curso de Inglês']}
        />
      </Container>
    );
  }
}

export default TerceiraEtapa;
