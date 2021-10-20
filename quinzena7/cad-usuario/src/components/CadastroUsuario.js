import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl, axiosConfig } from '../config';

class CadastroUsuario extends Component {
  state = {
    name: '',
    email: '',
    loading: false,
  };

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    };
    try {
      this.setState({ loading: true });

      const response = await axios.post(baseUrl, body, axiosConfig);
      console.log(response);
      alert('O usuário foi criado com sucesso!');
      this.setState({ name: '', email: '', loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className='container-cadastro'>
        <h2>Criar usuário</h2>

        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input
            type='text'
            name='name'
            id='name'
            value={this.state.name}
            onChange={this.handleFieldChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={this.state.email}
            onChange={this.handleFieldChange}
          />
        </div>
        {this.state.loading ? (
          <button disabled>Cadastrando...</button>
        ) : (
          <button onClick={this.handleSubmit}>Cadastrar</button>
        )}
      </div>
    );
  }
}

export default CadastroUsuario;
