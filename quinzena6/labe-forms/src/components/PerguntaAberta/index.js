import React, { Component } from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

class PerguntaAberta extends Component {
  render() {
    return (
      <FormGroup>
        <label>{this.props.pergunta}</label>
        <input type='text' />
      </FormGroup>
    );
  }
}

export default PerguntaAberta;
