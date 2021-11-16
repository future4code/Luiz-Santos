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

  select {
    padding: 1rem 0.8rem;
    background: #383b4b;
    border: none;
    color: #fff;
    font-size: 1.5rem;
  }

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;

    select {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2.4rem;

    select {
      padding: 0.5rem;
    }

    h5 {
      font-size: 2rem;
      line-height: 24px;
      letter-spacing: 3.375px;
    }
  }
`;
