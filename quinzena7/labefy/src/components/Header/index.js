import React, { Component } from 'react';
// import { AiFillBell } from 'react-icons/ai';

import logo from '../../img/logo.svg';

import * as S from './styles';

class Header extends Component {
  render() {
    return (
      <S.ContainerHeader>
        <img src={logo} alt='Podcastr' />
        <p>O melhor pra você ouvir, sempre</p>

        {/* <S.Notification>
          <AiFillBell color='#eaf4fd' size={24} />
        </S.Notification> */}
      </S.ContainerHeader>
    );
  }
}

export default Header;
