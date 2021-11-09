import styled from 'styled-components';

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  label {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.9rem;
    letter-spacing: 2.7px;
    margin-bottom: 0.5rem;
  }

  select {
    display: inline-block;
    font-family: inherit;
    font-size: 1.6rem;
    padding: 1rem 0;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    color: #fff;
    transition: all 0.2s ease;

    &:hover {
      border-color: #fff;
    }
  }

  option {
    background: #161620;
    font-size: 1.6rem;
  }
`;
