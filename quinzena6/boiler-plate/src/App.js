import React from 'react';
import styled from 'styled-components';
import './styles.css';

const TarefaList = styled.ul`
  padding: 0;
  width: 400px;
  list-style: none;
`;

const Tarefa = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border: 1px solid gray;
  padding: 10px;
`;

const TextoTarefa = styled.p`
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

const ExcluirTarefas = styled.div`
  margin-top: 30px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    inputEdicao: '',
    filtro: '',
    editando: false,
  };

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    const listaTarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (listaTarefas) {
      this.setState({
        tarefas: listaTarefas,
      });
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onChangeInputEdicao = (event) => {
    this.setState({ inputEdicao: event.target.value });
  };

  criaTarefa = () => {
    const tarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    this.setState({ tarefas: [...this.state.tarefas, tarefa], inputValue: '' });
  };

  selectTarefa = (id) => {
    const listaAtualizada = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const tarefaAtualizada = {
          ...tarefa,
          completa: !tarefa.completa,
        };

        return tarefaAtualizada;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: listaAtualizada });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  deleteTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.filter(
      (tarefa) => id !== tarefa.id
    );

    this.setState({
      tarefas: novaListaTarefas,
    });
  };

  deleteTodasAsTarefas = () => {
    this.setState({
      tarefas: [],
    });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa;
        case 'completas':
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className='App'>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value=''>Nenhum</option>
            <option value='pendentes'>Pendentes</option>
            <option value='completas'>Completas</option>
          </select>
        </InputsContainer>
        <ExcluirTarefas>
          <button onClick={this.deleteTodasAsTarefas}>Apagar Tarefas</button>
        </ExcluirTarefas>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa key={tarefa.id}>
                <TextoTarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </TextoTarefa>
                <ButtonsContainer>
                  <button onClick={() => this.deleteTarefa(tarefa.id)}>
                    Delete
                  </button>
                </ButtonsContainer>
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
