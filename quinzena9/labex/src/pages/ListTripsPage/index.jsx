import React, { useState } from 'react';
import { TripItem } from '../../components/TripItem';
import { useRequestData } from '../../hooks/useRequestData';

import { ListTripContainer, ListTripNavigation } from './styles';

export default function ListTripsPage() {
  const { data, error, isLoading } = useRequestData('/trips', []);
  const [selectTrip, setSelectTrip] = useState('');

  const trip = data?.trips?.find((item) => item.name === selectTrip);

  console.log(selectTrip);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <ListTripContainer>
      <ListTripNavigation>
        <h5>Escolha seu destino</h5>
        <select
          value={selectTrip}
          onChange={(event) => setSelectTrip(event.target.value)}
        >
          <option selected value='Selecione'>
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
    </ListTripContainer>
  );
}
