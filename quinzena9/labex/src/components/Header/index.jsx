import React from 'react';

import logoImg from '../../img/logo.svg';
import {
  HeaderContainer,
  HeaderContent,
  HeaderMenu,
  HeaderMenuButton,
} from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt='Logo' />
        <HeaderMenu>
          <ul>
            <li>
              <a href='/'>
                <span> 00</span> Home
              </a>
            </li>
            <li>
              <a href='/'>
                <span> 01</span> Viagens
              </a>
            </li>
            <li>
              <a href='/'>
                <span> 02</span> Inscreva-se
              </a>
            </li>
            <li>
              <a href='/'>
                <span> 03</span> Login
              </a>
            </li>
          </ul>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};
