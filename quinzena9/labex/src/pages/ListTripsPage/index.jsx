import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { TripItem } from '../../components/TripItem';
import { useFetch } from '../../hooks/useFetch';

import {
  ListTripContainer,
  ListTripContent,
  ListTripNavigation,
} from './styles';

export default function ListTripsPage() {
  const { data, error, isLoading, request } = useFetch();
  const [selectTrip, setSelectTrip] = useState('');

  const trip = data?.trips?.find((item) => item.name === selectTrip);

  useEffect(() => {
    async function getTrips() {
      await request({
        url: '/trips',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    getTrips();
  }, [request]);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <Header />
      <ListTripContainer>
        <ListTripContent>
          <ListTripNavigation>
            <h5>Escolha seu destino</h5>
            <select
              value={selectTrip}
              onChange={(event) => setSelectTrip(event.target.value)}
            >
              <option value='' disabled>
                Selecione
              </option>

              {data?.trips?.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </ListTripNavigation>
          <TripItem trip={trip} />
        </ListTripContent>
      </ListTripContainer>
    </>
  );
}
