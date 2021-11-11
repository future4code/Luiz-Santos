import React, { useState } from 'react';
import { format } from 'date-fns';

import { Input } from '../../components/Input';
import api from '../../services/api';

import { CreateTripContainer } from './styles';

export const CreateTripForm = () => {
  const [name, setName] = useState('');
  const [planet, setPlanet] = useState('');
  const [description, setDescription] = useState('');
  const [durationInDays, setDurationInDays] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const dateModified = new Date(date.replaceAll('-', ','));

      const formData = {
        name,
        planet,
        description,
        durationInDays,
        date: format(dateModified, 'dd/MM/yyyy'),
      };

      const response = await api.post('/trips', formData, {
        headers: {
          'Content-Type': 'application/json',
          auth: token,
        },
      });

      if (response.status === 200) {
        alert('Cadastrado com sucesso');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <CreateTripContainer>
      <h5>Nova Viagem</h5>

      <form onSubmit={handleSubmit}>
        <Input
          label='Nome'
          name='name'
          value={name}
          setValue={setName}
          required
        />
        <Input
          label='Planeta'
          name='planet'
          value={planet}
          setValue={setPlanet}
          required
        />
        <Input
          label='Descrição'
          name='planet'
          value={description}
          setValue={setDescription}
          required
        />
        <Input
          type='number'
          label='Duração em dias'
          name='durationInDays'
          value={durationInDays}
          setValue={setDurationInDays}
          required
        />

        <Input
          type='date'
          name='date'
          value={date}
          setValue={setDate}
          required
        />
        <button>Cadastrar</button>
      </form>
    </CreateTripContainer>
  );
};
