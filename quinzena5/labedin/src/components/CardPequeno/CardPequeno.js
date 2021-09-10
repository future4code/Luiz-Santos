import React from 'react';

import './CardPequeno.css';

const CardPequeno = (props) => {
  return (
    <div className='card-pequeno'>
      <img src={props.image} alt={props.textAlt} />
      <p>
        <strong>{props.label}: </strong>
        {props.content}
      </p>
    </div>
  );
};

export default CardPequeno;
