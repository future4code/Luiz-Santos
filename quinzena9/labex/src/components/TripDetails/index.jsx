import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
  ListCanditadesContainer,
  TripDetailsContainer,
  TripInfo,
} from './styles';

export const TripDetails = () => {
  const [data, setData] = useState(null);
  const { tripId } = useParams();

  useEffect(() => {
    async function getTrip() {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get(`/trip/${tripId}`, {
          headers: {
            'Content-Type': 'application/json',
            auth: token,
          },
        });

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTrip();
  }, [tripId]);

  const handleAproveCanditateToTrip = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const body = {
        approve: true,
      };
      const response = await api.put(
        `/trips/${tripId}/candidates/${id}/decide`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            auth: token,
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  console.log(data);

  if (data)
    return (
      <TripDetailsContainer>
        <h5>Detalhes da Viagem</h5>

        <TripInfo>
          <p>
            <span>Viagem:</span> {data.trip.name}
          </p>
          <p>
            <span>Descrição:</span> {data.trip.description}
          </p>
          <p>
            <span>Planeta:</span> {data.trip.planet}
          </p>
          <p>
            <span>Data:</span> {data?.trip?.date}
          </p>
          <p>
            <span>Duração:</span> {data.trip.durationInDays} dias
          </p>
        </TripInfo>

        {data.trip.candidates.length === 0 ? (
          <p>Nenhum candidato cadastrado.</p>
        ) : (
          <ListCanditadesContainer>
            <h5>Candidatos</h5>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Profissão</th>
                  <th>Texto</th>
                  <th>País</th>
                  <th>Aprovar Viagem</th>
                </tr>
              </thead>
              <tbody>
                {data?.trip?.candidates?.map((candidate, index) => (
                  <tr key={candidate.id}>
                    <td>{index + 1}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.age}</td>
                    <td>{candidate.profession}</td>
                    <td>{candidate.applicationText}</td>
                    <td>{candidate.country}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleAproveCanditateToTrip(candidate.id)
                        }
                      >
                        Aprovar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ListCanditadesContainer>
        )}
      </TripDetailsContainer>
    );
  else return null;
};
