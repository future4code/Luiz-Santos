import React, { Component } from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

class PerguntaFechada extends Component {
  render() {
    return (
      <FormGroup>
        <label>{this.props.pergunta}</label>
        <select>
          {this.props.opcoes.map((opcao) => (
            <option>{opcao}</option>
          ))}
        </select>
      </FormGroup>
    );
  }
}

export default PerguntaFechada;
