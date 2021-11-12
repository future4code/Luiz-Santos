import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading';
import { Table } from '../Table';
import {
  ListCanditadesContainer,
  TripDetailsContainer,
  TripInfo,
} from './styles';

export const TripDetails = () => {
  const { isLoading, error, request } = useFetch();
  const [listCandidates, setListCandidates] = useState([]);
  const [listApproved, setListApproved] = useState([]);
  const [trip, setTrip] = useState({});

  const { tripId } = useParams();

  useEffect(() => {
    async function getTrip() {
      const token = localStorage.getItem('token');
      const response = await request({
        url: `/trip/${tripId}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          auth: token,
        },
      });
      setListCandidates(response.data.trip.candidates);
      setListApproved(response.data.trip.approved);
      const { name, planet, durationInDays, description, date } =
        response.data.trip;
      setTrip({ name, planet, durationInDays, description, date });
    }
    getTrip();
  }, [tripId, request]);

  const handleAproveCanditateToTrip = async (id) => {
    const token = localStorage.getItem('token');

    const response = await request({
      url: `/trips/${tripId}/candidates/${id}/decide`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        auth: token,
      },
      data: {
        approve: true,
      },
    });

    if (response.status === 200) {
      const newApproved = listCandidates.find(
        (candidate) => candidate.id === id
      );
      setListApproved((prevState) => [newApproved, ...prevState]);

      const newListCandidates = listCandidates.filter(
        (candidate) => candidate.id !== id
      );
      setListCandidates(newListCandidates);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <TripDetailsContainer>
      <h5>Detalhes da Viagem</h5>

      <TripInfo>
        <p>
          <span>Viagem:</span> {trip?.name}
        </p>
        <p>
          <span>Descrição:</span> {trip?.description}
        </p>
        <p>
          <span>Planeta:</span> {trip?.planet}
        </p>
        <p>
          <span>Data:</span> {trip?.date}
        </p>
        <p>
          <span>Duração:</span> {trip?.durationInDays} dias
        </p>
      </TripInfo>

      <ListCanditadesContainer>
        <h5>Candidatos</h5>
        {listCandidates.length > 0 ? (
          <Table
            tableHeadItems={[
              'Nome',
              'Idade',
              'Profissão',
              'Texto',
              'País',
              'Aprovar Viagem',
            ]}
            tableBodyData={listCandidates}
            handleAproveCanditateToTrip={handleAproveCanditateToTrip}
          />
        ) : (
          <span>0</span>
        )}
      </ListCanditadesContainer>
      <ListCanditadesContainer>
        <h5>Aprovados</h5>
        {listApproved.length > 0 ? (
          <Table
            tableHeadItems={['Nome', 'Idade', 'Profissão', 'Texto', 'País']}
            tableBodyData={listApproved}
          />
        ) : (
          <span>0</span>
        )}
      </ListCanditadesContainer>
    </TripDetailsContainer>
  );
};
