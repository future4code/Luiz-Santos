import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from './components/PokeCard';

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState('');

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  const getPokemonName = async () => {
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon/?limit=151'
      );
      setPokeList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonName();
  }, []);

  return (
    <div className='App'>
      <select onChange={changePokeName}>
        <option value=''> Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemonName={pokeName} />}
    </div>
  );
}

export default App;
