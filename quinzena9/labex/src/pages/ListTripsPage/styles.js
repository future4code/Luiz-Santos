import styled from 'styled-components';

export const ListTripContainer = styled.div`
  padding-top: 7.6rem;
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
