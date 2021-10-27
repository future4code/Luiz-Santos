import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import * as S from './styles';

const MatchesList = () => {
  const [matchesList, setMatchesList] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = async () => {
    try {
      const response = await api.get('/luiz-santos/matches');

      setMatchesList(response.data.matches);
    } catch (err) {
      alert('Ops! Ocorreu um erro\n' + err);
    }
  };

  const clearMatches = async () => {
    try {
      const response = await api.put('/luiz-santos/clear');
      if (response.status === 200) {
        getMatches();
      }
    } catch (err) {
      alert('Ops! Ocorreu um erro\n' + err);
    }
  };

  return (
    <S.Container>
      <button onClick={clearMatches} disabled={matchesList.length === 0}>
        Limpar
      </button>
      {matchesList &&
        matchesList.map((person) => (
          <S.MatchInfo key={person.id}>
            <S.ContainerImg>
              <img
                src={person.photo}
                alt={`Foto ${person.name}`}
                loading='lazy'
              />
            </S.ContainerImg>
            <p>{person.name}</p>
          </S.MatchInfo>
        ))}
    </S.Container>
  );
};

export default MatchesList;
