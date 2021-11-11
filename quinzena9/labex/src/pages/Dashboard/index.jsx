import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { CreateTripForm } from '../../components/CreateTripForm';
import { ListTrips } from '../../components/ListTrips';
import { TripDetails } from '../../components/TripDetails';
import {
  ContainerDashboard,
  ContentDashboard,
  HeaderDashboard,
  Sidebar,
} from './styles';

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard>
        <a href='/'>Logo</a>

        <div>
          <span>Foto admin</span>
          <button>Sair</button>
        </div>
      </HeaderDashboard>
      <ContainerDashboard>
        <Sidebar>
          <ul>
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
            <Route index path='/' element={<ListTrips />} />
            <Route path='/create-trip' element={<CreateTripForm />} />
            <Route path='/trip-detais/:tripId' element={<TripDetails />} />
          </Routes>
        </ContentDashboard>
      </ContainerDashboard>
    </>
  );
};

export default Dashboard;
