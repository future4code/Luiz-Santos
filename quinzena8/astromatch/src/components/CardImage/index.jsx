import React from 'react';

import * as S from './styles';

const CardImage = ({ profile }) => {
  return (
    <S.CardContainer>
      <S.CardImg src={profile.photo} alt={profile.name} loading='lazy' />
      <S.CardInfoPerson>
        <S.CardProfileName>
          {profile.name} <span>{profile.age}</span>
        </S.CardProfileName>
        <S.CardProfileBio>{profile.bio}</S.CardProfileBio>
      </S.CardInfoPerson>
    </S.CardContainer>
  );
};

export default CardImage;
