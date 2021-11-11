import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ListTripsContainer, ListTripsContent } from './styles';

import iconTrashImg from '../../img/trash.svg';
import api from '../../services/api';
import { useFetch } from '../../hooks/useFetch';

export const ListTrips = () => {
  const { data, isLoading, error } = useFetch('/trips');

  const handleDeleteTrip = useCallback(async (tripId) => {
    const token = localStorage.getItem('token');
    const confirme = window.confirm('Deseja deletar este item?');

    try {
      if (!confirme) {
        return;
      }

      const response = await api.delete(`/trips/${tripId}`, {
        headers: {
          'Content-Type': 'application/json',
          auth: token,
        },
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ListTripsContainer>
      <h5>Lista de viagens</h5>

      <ListTripsContent>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Planeta</th>
              <th>Duração</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.trips?.map((trip, index) => (
                <tr key={trip.id}>
                  <td>{index + 1}</td>
                  <td>{trip.name}</td>
                  <td>{trip.planet}</td>
                  <td>{trip.durationInDays}</td>
                  <td>{trip.date}</td>
                  <td>
                    <Link to={`trip-detais/${trip.id}`}>Visualizar</Link>
                    <button onClick={() => handleDeleteTrip(trip.id)}>
                      <img src={iconTrashImg} alt='Icone Lixeira' />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </ListTripsContent>
    </ListTripsContainer>
  );
};
