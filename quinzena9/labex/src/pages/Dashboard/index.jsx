import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Routes, Route } from 'react-router-dom';
import { CreateTripForm } from '../../components/CreateTripForm';
import { ListTrips } from '../../components/ListTrips';
import { TripDetails } from '../../components/TripDetails';
import {
  ContainerDashboard,
  ContentDashboard,
  HeaderDashboard,
  Sidebar,
  Wrapper,
} from './styles';

import logoImg from '../../img/logo.svg';
import iconSignOut from '../../img/sign-out.svg';

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  };

  return (
    <Wrapper>
      <HeaderDashboard>
        <Link to='/dashboard'>
          <img src={logoImg} alt='Logo' />
        </Link>

        <div>
          <button onClick={logout}>
            Sair <img src={iconSignOut} alt='Icone Signout' />
          </button>
        </div>
      </HeaderDashboard>
      <ContainerDashboard>
        <Sidebar>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/dashboard/create-trip'>Criar Viagem</Link>
            </li>
          </ul>

          <p>Labex - 2021 &copy; Todos os direitos reservados</p>
        </Sidebar>
        <ContentDashboard>
          <Routes>
            <Route path='/' element={<ListTrips />} />
            <Route path='/create-trip' element={<CreateTripForm />} />
            <Route path='/trip-detais/:tripId' element={<TripDetails />} />
          </Routes>
        </ContentDashboard>
      </ContainerDashboard>
    </Wrapper>
  );
};

export default Dashboard;
