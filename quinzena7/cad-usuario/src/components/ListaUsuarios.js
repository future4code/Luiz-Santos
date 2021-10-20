import React, { Component } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../config';

class ListaUsuarios extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ users: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  deleteUser = async (id) => {
    if (window.confirm('Deseja deletar o usuário?')) {
      try {
        await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          axiosConfig
        );

        this.getAllUsers();
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <div>
        <div className='container-usuarios'>
          <h2>Usuários</h2>

          {this.state.users.map((user) => (
            <div className='user-info' key={user.id}>
              <span>{user.name}</span>
              <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListaUsuarios;
