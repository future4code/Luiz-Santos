import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 9.6rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
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
  display: flex;
  align-items: center;
  gap: 4.8rem;

  ul {
    display: flex;
    align-items: center;
    gap: 4.8rem;

    list-style: none;
    font-family: Barlow Condensed;
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
`;
