import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const HeaderLogo = styled.h3`
  font-size: 3.6rem;
  font-weight: bold;
  background: -webkit-linear-gradient(#dd5e89, #f7bb97);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeaderButtonBack = styled.button`
  background: none;
  border: none;

  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderButtonMatches = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.5rem;
  height: 3.5rem;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    cursor: initial;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
