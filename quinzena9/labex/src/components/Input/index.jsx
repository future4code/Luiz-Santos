import React from 'react';
import { FormGroup } from './styles';

export const Input = ({ label, name, value, onChange, ...props }) => {
  return (
    <FormGroup>
      <input
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={name}>{label}</label>
    </FormGroup>
  );
};
