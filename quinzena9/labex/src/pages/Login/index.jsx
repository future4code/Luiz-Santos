import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Input } from '../../components/Input';
import { LoginContainer, LoginContent } from './styles';
import api from '../../services/api';
import { Header } from '../../components/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/dashboard' } };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      setIsLoading(true);
      const response = await api.post('/login', body);

      localStorage.setItem('token', response.data.token);
      setIsLoading(false);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <h5>Login</h5>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <Input
              label='Email'
              name='email'
              type='email'
              value={email}
              setValue={setEmail}
              required
            />
            <Input
              label='Senha'
              name='password'
              type='password'
              value={password}
              setValue={setPassword}
              required
            />
            <button disabled={isLoading}>Entrar</button>
          </form>
        </LoginContent>
      </LoginContainer>
    </>
  );
}
