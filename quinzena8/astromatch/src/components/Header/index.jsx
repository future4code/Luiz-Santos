import React from 'react';
import * as S from './styles';

import iconArrowBack from '../../img/arrow_back.svg';
import iconTwoHearts from '../../img/two-hearts.svg';

const Header = ({
  handleShowMatchesList,
  handleShowProfileToChoose,
  clearMatches,
  isActive,
}) => {
  return (
    <S.HeaderContainer>
      {isActive && (
        <S.HeaderButtonBack onClick={handleShowProfileToChoose}>
          <img src={iconArrowBack} alt='Arrow Back' />
        </S.HeaderButtonBack>
      )}
      <S.HeaderLogo>AstroMatch</S.HeaderLogo>

      {!isActive && (
        <S.HeaderButtonMatches
          onClick={handleShowMatchesList}
          disabled={isActive}
        >
          <img src={iconTwoHearts} alt='Two Hearts' />
        </S.HeaderButtonMatches>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
