import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../img/logo.svg';
import { HeaderContainer, HeaderContent, HeaderMenu } from './styles';

export const Header = () => {
  const token = localStorage.getItem('token');

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt='Logo' />
        <HeaderMenu>
          <ul>
            <li>
              <Link to='/'>
                <span> 00</span> Home
              </Link>
            </li>
            <li>
              <Link to='/list-trips'>
                <span> 01</span> Viagens
              </Link>
            </li>
            <li>
              <Link to='/aplication-form'>
                <span> 02</span> Inscreva-se
              </Link>
            </li>
            {!token ? (
              <li>
                <Link to='/login'>
                  <span> 03</span> Login
                </Link>
              </li>
            ) : (
              <li>
                <Link to='/dashboard'>
                  <span> 03</span> Dashboard
                </Link>
              </li>
            )}
          </ul>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};
