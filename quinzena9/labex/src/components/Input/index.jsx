import React from 'react';
import { FormGroup } from './styles';

export const Input = ({ label, name, value, setValue, ...props }) => {
  return (
    <FormGroup>
      <input
        type='text'
        name={name}
        value={value}
        id={name}
        onChange={(event) => setValue(event.target.value)}
        {...props}
      />
      <label htmlFor={name}>{label}</label>
    </FormGroup>
  );
};
