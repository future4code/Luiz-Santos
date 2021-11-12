import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from '../../hooks/useForm';

import { Container, Content, FormContainer, FormGroupSelect } from './styles';

export default function AplicationForm() {
  const { form, onChange, clearFields } = useForm({
    name: '',
    age: '',
    profession: '',
    applicationText: '',
    tripId: '',
    country: '',
  });

  const [countriesData, setCountriesData] = useState([]);
  const [listTrips, setListTrips] = useState([]);
  const { isLoading, error, request } = useFetch();

  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');

      const coutriesNames = response.data
        .map((country) => {
          return { name: country.name.common };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

      setCountriesData(coutriesNames);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    async function getTrips() {
      const response = await request({
        url: '/trips',
        method: 'GET',
      });

      setListTrips(response.data.trips);
    }
    getCountries();
    getTrips();
  }, [request]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await request({
      url: `/trips/${form.tripId}/apply`,
      method: 'POST',
      data: form,
    });

    if (response.status === 200) {
      alert(response.data.message);
    }
    clearFields();
  };

  if (error) return <p>{error}</p>;
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h5>Inscreva-se para uma viagem</h5>

          <FormContainer onSubmit={handleSubmit}>
            <FormGroupSelect>
              <select
                name='tripId'
                value={form.tripId}
                onChange={onChange}
                disabled={isLoading}
              >
                <option value='' disabled>
                  Selecione uma viagem
                </option>
                {listTrips?.map((trip) => (
                  <option key={trip.id} value={trip.id}>
                    {trip.name}
                  </option>
                ))}
              </select>
            </FormGroupSelect>
            <Input
              name='name'
              label='Nome'
              value={form.name}
              onChange={onChange}
              required
            />
            <Input
              name='age'
              label='Idade'
              value={form.age}
              onChange={onChange}
              type='number'
              min='18'
              required
            />
            <Input
              name='profession'
              label='Profissão'
              value={form.profession}
              onChange={onChange}
              required
            />
            <Input
              name='applicationText'
              label='Texto de Candidatura'
              value={form.applicationText}
              onChange={onChange}
              required
            />

            <FormGroupSelect>
              <select name='country' value={form.country} onChange={onChange}>
                <option value='' disabled>
                  Selecione um país
                </option>
                {countriesData?.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </FormGroupSelect>

            <button type='submit' disabled={isLoading}>
              Enviar
            </button>
          </FormContainer>
        </Content>
      </Container>
    </>
  );
}
