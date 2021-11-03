import React from 'react';

import iconStar from '../../img/star.svg';
import iconCancel from '../../img/clear.svg';
import iconFavorite from '../../img/favorite.svg';

import * as S from './styles';

const ButtonsControl = ({ handleMatchProfile, handleDiscardProfile }) => {
  return (
    <S.ButtonsContainer>
      <S.CustomButton onClick={handleDiscardProfile}>
        <img src={iconCancel} alt='X' />
      </S.CustomButton>
      <S.CustomButton className='btn-favorite' onClick={handleMatchProfile}>
        <img src={iconFavorite} alt='Imagem de Coração' />
      </S.CustomButton>
      <S.CustomButton onClick={handleMatchProfile}>
        <img src={iconStar} alt='Imagem de estrela' />
      </S.CustomButton>
    </S.ButtonsContainer>
  );
};

export default ButtonsControl;
