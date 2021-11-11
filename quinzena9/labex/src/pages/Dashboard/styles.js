import styled from 'styled-components';

export const HeaderDashboard = styled.header`
  height: 7rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  padding: 0 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerDashboard = styled.main`
  height: calc(100vh - 7rem);
  display: flex;
`;

export const Sidebar = styled.nav`
  flex: 0 0 18%;
  padding: 4rem 3.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.04);
  /* backdrop-filter: blur(81.5485px); */

  ul {
    list-style: none;
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;

    li {
      padding: 1rem 0;

      &:not(:first-child) {
        margin-top: 1.6rem;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      display: block;
      padding: 0.5rem 0;
      position: relative;
      transition: all 1s ease;

      &::after {
        display: block;
        content: '';
        height: 1px;
        background: rgba(255, 255, 255, 0.09);
        position: absolute;
        left: 0;
        right: 0;
        bottom: -11px;
        opacity: 0;
      }

      &:hover::after,
      &:link:active::after {
        opacity: 1;
        transition: all 1s ease;
      }
    }
  }

  p {
    font-size: 1.2rem;
    color: #d0d6f9;
  }
`;

export const ContentDashboard = styled.section`
  flex: 1;
  padding: 4rem;
  background: #1e1f29;
`;
