import React, { useState } from 'react';
import api from '../../services/api';
import Header from '../Header';
import MatchesList from '../MatchesList';
import ProfileToChoose from '../ProfileToChoose';

import * as S from './styles';

const Content = () => {
  const [isActive, setIsActive] = useState(false);

  const handleShowMatchesList = () => {
    setIsActive(true);
  };

  const handleShowProfileToChoose = () => {
    setIsActive(false);
  };

  return (
    <S.MainContainer>
      <Header
        handleShowMatchesList={handleShowMatchesList}
        handleShowProfileToChoose={handleShowProfileToChoose}
        isActive={isActive}
      />
      {!isActive && <ProfileToChoose />}
      {isActive && <MatchesList />}
    </S.MainContainer>
  );
};

export default Content;
