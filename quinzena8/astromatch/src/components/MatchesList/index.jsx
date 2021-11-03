import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Loading from '../Loading';

import * as S from './styles';

const MatchesList = () => {
  const [matchesList, setMatchesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = async () => {
    try {
      setLoading(true);
      const response = await api.get('/luiz-santos/matches');
      if (response.status === 200) {
        setMatchesList(response.data.matches);
      }
      setLoading(false);
    } catch (err) {
      alert('Ops! Ocorreu um erro\n' + err);
      setLoading(false);
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

  if (loading) return <Loading />;

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
