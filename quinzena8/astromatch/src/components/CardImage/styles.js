import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 80%;
  width: 100%;

  /* @media (max-width: 1400px) {
    height: 25rem;
  } */
`;

export const CardImg = styled.img`
  width: 100%;
  max-width: 45rem;
  object-fit: cover;
  object-position: top;
  height: 100%;

  /* @media (max-width: 1400px) {
    height: 25rem;
  } */
`;

export const CardInfoPerson = styled.div`
  width: 100%;
  max-width: 45rem;
  min-height: 50%;
  background: none;
  padding: 3rem 2rem;
  position: absolute;
  bottom: 0;
  z-index: 1;
  color: #fff;

  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// rgb(221, 94, 137)

export const CardProfileName = styled.h4`
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 900;
  font-size: 2.4rem;
`;

export const CardProfileBio = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;
`;
