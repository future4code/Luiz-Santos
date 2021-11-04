import styled from 'styled-components';

export const TripContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9.6rem 0 4rem;

  img {
    width: 100%;
    max-width: 44.5rem;
    height: 44.5rem;
  }
`;

export const TripDetails = styled.div`
  max-width: 44.5rem;

  h2 {
    font-family: 'Bellefair';
    font-weight: normal;
    font-size: 10rem;
    line-height: 11.5rem;
    text-transform: uppercase;
    margin-bottom: 1.4rem;
  }

  h5 {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.4rem;

    letter-spacing: 4.725px;
    text-transform: uppercase;

    margin-bottom: 2rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: #d0d6f9;
    margin-bottom: 5.4rem;
  }
`;

export const TripDetailsDate = styled.div`
  border-top: 1px solid #383b4b;
  padding: 2.8rem 0;
  display: flex;
  align-items: center;
  gap: 8rem;

  & > div {
    span {
      display: inline-block;
      font-family: 'Barlow Condensed';
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 1.7rem;
      letter-spacing: 2.3625px;
      text-transform: uppercase;
      color: #d0d6f9;
      margin-bottom: 1.2rem;
    }

    h6 {
      font-family: 'Bellefair';
      font-weight: normal;
      font-size: 2.8rem;
      line-height: 3.2rem;
      text-transform: uppercase;
    }
  }
`;
