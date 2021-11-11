import React from 'react';

import { dataImg } from '../../data/dataImg';

import { TripContent, TripDetails, TripDetailsDate } from './styles';

import luaImg from '../../img/lua.png';

export const TripItem = ({ trip }) => {
  const planet = dataImg.find(
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
        {/* <h2>{trip?.planet}</h2> */}
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
