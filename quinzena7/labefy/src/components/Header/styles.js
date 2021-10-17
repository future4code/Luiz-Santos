import styled from 'styled-components';

export const ContainerHeader = styled.header`
  height: 80px;

  display: flex;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #494d4b;

  p {
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid #494d4b;

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;
