import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../services/api';

import { Input } from '../../components/Input';
import { Container, Content, FormContainer, FormGroupSelect } from './styles';
import { Header } from '../../components/Header';
import { useFetch } from '../../hooks/useFetch';

export default function AplicationForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [applicationText, setApplicationText] = useState('');
  const [tripId, setTripId] = useState('');
  const [country, setCountry] = useState('');
  const [countriesData, setCountriesData] = useState([]);

  const { data, isLoading, error, request } = useFetch();

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
      await request({
        url: '/trips',
        method: 'GET',
      });
    }
    getTrips();
    getCountries();
  }, [request]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      name,
      age,
      profession,
      applicationText,
      country,
    };
    try {
      const response = await api.post(`/trips/${tripId}/apply`, body);

      if (response.status === 200) {
        alert(response.data.message);
      }
      setName('');
      setAge('');
      setProfession('');
      setTripId('');
      setApplicationText('');
      setCountry('');
    } catch (error) {
      console.log(error);
      alert('Algo deu errado, tente novamente \n' + error);
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h5>Inscreva-se para uma viagem</h5>

          <FormContainer onSubmit={handleSubmit}>
            <Input
              name='name'
              label='Nome'
              value={name}
              setValue={setName}
              required
            />
            <Input
              name='age'
              label='Idade'
              value={age}
              setValue={setAge}
              required
            />
            <Input
              name='profession'
              label='Profissão'
              value={profession}
              setValue={setProfession}
              required
            />
            <Input
              name='applicationText'
              label='Texto de Candidatura'
              value={applicationText}
              setValue={setApplicationText}
              required
            />

            <FormGroupSelect>
              <select
                value={tripId}
                onChange={(event) => setTripId(event.target.value)}
                disabled={isLoading}
              >
                <option value='' disabled>
                  Selecione uma viagem
                </option>
                {data?.trips?.map((trip) => (
                  <option key={trip.id} value={trip.id}>
                    {trip.name}
                  </option>
                ))}
              </select>
            </FormGroupSelect>
            <FormGroupSelect>
              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
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

            <button type='submit'>Enviar</button>
          </FormContainer>
        </Content>
      </Container>
    </>
  );
}
