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

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 5rem;

    img {
      max-width: 30rem;
      height: 30rem;
    }
  }

  @media (max-width: 500px) {
    img {
      max-width: 17rem;
      height: 17rem;
    }
  }
`;

export const TripDetails = styled.div`
  max-width: 44.5rem;

  h4 {
    margin-bottom: 3rem;
  }

  p {
    color: #d0d6f9;
    margin-bottom: 2rem;
  }
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const TripDetailsDate = styled.div`
  border-top: 1px solid #383b4b;
  padding: 2.8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
      font-size: 2.2rem;
      line-height: 3.2rem;
      text-transform: uppercase;

      @media (max-width: 960px) {
        font-size: 1.8rem;
      }

      @media (max-width: 500px) {
        font-size: 1.6rem;
        line-height: 1.8rem;
      }
    }
  }
`;
