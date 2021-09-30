import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 30px;
`;

class EtapaFinal extends Component {
  render() {
    return (
      <Container>
        <Title>O FORMULÁRIO ACABOU</Title>
        <Paragraph>
          Muito obrigado por participar! Entraremos em contato!
        </Paragraph>
      </Container>
    );
  }
}

export default EtapaFinal;
