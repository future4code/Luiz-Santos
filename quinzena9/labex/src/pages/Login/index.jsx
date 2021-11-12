import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Input } from '../../components/Input';
import { LoginContainer, LoginContent } from './styles';
import { Header } from '../../components/Header';
import { useFetch } from '../../hooks/useFetch';

export default function Login() {
  const { isLoading, error, request } = useFetch();
  const { form, onChange, clearFields } = useForm({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/dashboard' } };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await request({
      url: '/login',
      method: 'POST',
      data: form,
    });
    if (!response) {
      clearFields();
      return;
    }
    localStorage.setItem('token', response.data.token);
    navigate(from, { replace: false });
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
              value={form.email}
              onChange={onChange}
              required
            />
            <Input
              label='Senha'
              name='password'
              type='password'
              value={form.password}
              onChange={onChange}
              required
            />
            <button disabled={isLoading}>Entrar</button>
          </form>
        </LoginContent>
      </LoginContainer>
    </>
  );
}
