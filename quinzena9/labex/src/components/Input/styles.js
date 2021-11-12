import styled from 'styled-components';

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  position: relative;

  label {
    display: block;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.9rem;
    position: absolute;
    top: 10px;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  input {
    display: block;
    width: 100%;
    font-family: inherit;
    font-size: 1.6rem;
    padding: 1rem 0.8rem;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    color: #e9e9e9;
    transition: all 0.2s ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.4rem;
    }

    &:focus {
      outline: none;
    }

    &:hover,
    &:focus {
      border-color: #fff;
    }

    &:focus ~ label,
    &:valid ~ label {
      top: -20px;
      font-size: 1.6rem;
    }
  }
`;
