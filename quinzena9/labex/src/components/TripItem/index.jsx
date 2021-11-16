import React from 'react';

import { dataPlanets } from '../../constantes/dataPlanets';

import { TripContent, TripDetails, TripDetailsDate } from './styles';

import luaImg from '../../img/lua.png';

export const TripItem = ({ trip }) => {
  const planet = dataPlanets.find(
    (item) => item.name.toLocaleLowerCase() === trip?.planet.toLocaleLowerCase()
  );

  if (!trip) return null;

  return (
    <TripContent>
      {planet ? (
        <img src={planet.imgSource} alt={`Imagem do planeta ${planet.name}`} />
      ) : (
        <img src={luaImg} alt='Imagem da lua' />
      )}
      <TripDetails>
        <h4>{trip?.name}</h4>
        <p>{trip?.description}</p>
        <TripDetailsDate>
          <div>
            <span>Destino</span>
            <h6>{trip?.planet}</h6>
          </div>
          <div>
            <span>Data</span>
            <h6>{trip?.date}</h6>
          </div>
          <div>
            <span>Duração</span>
            <h6>{trip?.durationInDays} dias</h6>
          </div>
        </TripDetailsDate>
      </TripDetails>
    </TripContent>
  );
};
