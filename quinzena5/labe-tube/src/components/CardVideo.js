import React from 'react';

const CardVideo = (props) => {
  return (
    <div
      className={`box-pagina-principal ${props.className}`}
      onClick={props.handleClickVideo}
    >
      <img src={props.url} alt='' />
      <h4>{props.titulo}</h4>
    </div>
  );
};

export default CardVideo;
