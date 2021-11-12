import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  /* overflow-y: scroll; */
`;

export const HeaderDashboard = styled.header`
  height: 7rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  padding: 0 4rem;
  border-bottom: 1px solid #1e1f29;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;

export const ContainerDashboard = styled.div`
  height: calc(100vh - 7rem);
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.nav`
  flex: 0 0 18%;
  padding: 4rem 3.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.04);

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
    line-height: 1.4;
    color: #d0d6f9;
  }

  @media (max-width: 960px) {
    padding: 1rem;
    flex: 0 0 6rem;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;

      li {
        &:not(:first-child) {
          margin-top: 0;
        }
      }
    }

    p {
      display: none;
    }
  }
`;

export const ContentDashboard = styled.section`
  flex: 1;
  padding: 4rem;
  background: #1e1f29;
  overflow-y: scroll;

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }
`;
