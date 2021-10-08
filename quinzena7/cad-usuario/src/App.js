import './App.css';

import React, { Component } from 'react';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuarios from './components/ListaUsuarios';

class App extends Component {
  state = {
    isActive: false,
  };

  render() {
    return (
      <div className='app'>
        <button
          className='btn-mudar-pagina'
          onClick={() => this.setState({ isActive: !this.state.isActive })}
        >
          Mudar de página
        </button>
        {!this.state.isActive && <CadastroUsuario />}
        {this.state.isActive && <ListaUsuarios />}
      </div>
    );
  }
}

export default App;
