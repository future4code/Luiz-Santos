import styled, { css } from 'styled-components';

import iconMenuHamburguer from '../../img/menu-hamburguer.svg';
import iconCloseMenu from '../../img/close-menu.svg';

export const HeaderContainer = styled.header`
  height: 9.6rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  position: relative;
`;

export const HeaderContent = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  img {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

export const HeaderMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 4.8rem;

    list-style: none;
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 19px;
    letter-spacing: 2.7px;

    li a {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      display: block;
      padding: 0.5rem 0;
      position: relative;
      transition: all 1s ease;

      &::after {
        display: block;
        content: '';
        height: 3px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -32px;
        opacity: 0;
      }

      &:hover::after {
        opacity: 1;
        transition: all 1s ease;
      }

      span {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    ${({ isOpen }) => css`
      display: ${isOpen ? 'block' : 'none'};
    `}
    position: absolute;
    top: 0;
    right: 0;
    width: 25.4rem;
    height: 100vh;
    z-index: 1000;
    padding: 11.8rem 0 4rem;
    background: rgba(22, 22, 32, 0.97);
    backdrop-filter: blur(81.5485px);
    --webkit-backdrop-filter: blur(81.5485px);

    ul {
      flex-direction: column;
      gap: 3.2rem;
      align-items: flex-start;
      padding-left: 3.2rem;

      li {
        width: 100%;

        a {
          &::after {
            width: 3px;
            height: 100%;
            left: auto;
            bottom: 0;
          }
        }
      }
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  ${({ isOpen }) => css`
    background: url(${!isOpen ? iconMenuHamburguer : iconCloseMenu}) no-repeat
      center center;
    z-index: ${isOpen ? 2000 : 'initial'};
  `}
  width: 2.4rem;
  height: 2.1rem;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
