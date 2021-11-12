import React from 'react';
import { format } from 'date-fns';

import { useForm } from '../../hooks/useForm.js';
import { Input } from '../../components/Input';

import { CreateTripContainer } from './styles';
import { useFetch } from '../../hooks/useFetch.js';

export const CreateTripForm = () => {
  const { isLoading, error, request } = useFetch();

  const { form, onChange, clearFields } = useForm({
    name: '',
    planet: '',
    description: '',
    durationInDays: '',
    date: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    const dateModified = new Date(form.date.replaceAll('-', ','));

    const formData = {
      ...form,
      date: format(dateModified, 'dd/MM/yyyy'),
    };

    const response = await request({
      url: '/trips',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        auth: token,
      },
      data: formData,
    });

    if (response.status === 200) {
      alert('Cadastrado com sucesso');
    }

    clearFields();
  };

  return (
    <CreateTripContainer>
      <h5>Nova Viagem</h5>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <Input
          label='Nome'
          name='name'
          value={form.name}
          onChange={onChange}
          required
        />
        <Input
          label='Planeta'
          name='planet'
          value={form.planet}
          onChange={onChange}
          required
        />
        <Input
          label='Descrição'
          name='description'
          value={form.description}
          onChange={onChange}
          required
        />
        <Input
          type='number'
          label='Duração em dias'
          name='durationInDays'
          value={form.durationInDays}
          onChange={onChange}
          required
        />

        <Input
          type='date'
          name='date'
          value={form.date}
          onChange={onChange}
          required
        />
        <button disabled={isLoading}>Cadastrar</button>
      </form>
    </CreateTripContainer>
  );
};
