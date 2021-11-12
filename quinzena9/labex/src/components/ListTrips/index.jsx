import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListTripsContainer, ListTripsContent } from './styles';

import iconTrashImg from '../../img/trash.svg';
import api from '../../services/api';
import { useFetch } from '../../hooks/useFetch';

export const ListTrips = () => {
  const { isLoading, error, request } = useFetch();
  const [tripsList, setTripsList] = useState([]);

  useEffect(() => {
    async function getTrips() {
      const response = await request({
        url: '/trips',
        method: 'GET',
      });

      setTripsList(response?.data.trips);
    }
    getTrips();
  }, [request]);

  const handleDeleteTrip = async (tripId) => {
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

      if (response.status === 200) {
        const newTripList = tripsList.filter((trip) => trip.id !== tripId);
        setTripsList(newTripList);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

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
            {tripsList?.map((trip, index) => (
              <tr key={trip.id}>
                <td>{index + 1}</td>
                <td>{trip.name}</td>
                <td>{trip.planet}</td>
                <td>{trip.durationInDays}</td>
                <td>{trip.date}</td>
                <td>
                  <Link to={`trip-detais/${trip.id}`}>Visualizar</Link>
                </td>
                <td>
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
