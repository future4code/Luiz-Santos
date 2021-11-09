import styled from 'styled-components';
import backgroundImg from '../../img/background2.png';

export const ListTripContainer = styled.main`
  min-height: calc(100vh - 9.6rem);
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;

export const ListTripContent = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 7.6rem 2rem 0;
`;

export const ListTripNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;

  h5 {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.4rem;

    letter-spacing: 4.725px;
    text-transform: uppercase;
  }

  select {
    width: 23rem;
    height: 3.4rem;
    background: #383b4b;
    border: none;
    color: #fff;
    font-size: 1.5rem;
  }
`;
