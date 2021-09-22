import React, { Component } from 'react';
import styled from 'styled-components';
import EtapaFinal from './components/EtapaFinal';

import PrimeiraEtapa from './components/PrimeiraEtapa';
import SegundaEtapa from './components/SegundaEtapa';
import TerceiraEtapa from './components/TerceiraEtapa';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  padding: 60px 20px;
`;

class App extends Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <PrimeiraEtapa />;
      case 2:
        return <SegundaEtapa />;
      case 3:
        return <TerceiraEtapa />;
      case 4:
        return <EtapaFinal />;
      default:
        return <h2>Formulário não encontrado.</h2>;
    }
  };

  onClickProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };

  render() {
    return (
      <MainContainer>
        {this.renderizaEtapa()}

        {this.state.etapa < 4 && (
          <button onClick={this.onClickProximaEtapa}>Proxima Etapa</button>
        )}
      </MainContainer>
    );
  }
}

export default App;
