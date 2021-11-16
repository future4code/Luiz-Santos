import React from 'react';
import { FormGroup } from './styles';

export const InputSelect = ({ name, options, value, setValue }) => {
  return (
    <FormGroup>
      <select
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value='' disabled>
          Selecione uma viagem
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option.name}
          </option>
        ))}
      </select>
    </FormGroup>
  );
};
