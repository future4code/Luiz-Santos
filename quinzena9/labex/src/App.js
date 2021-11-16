import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ListTripsPage from './pages/ListTripsPage';
import AplicationForm from './pages/ApplicationForm';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import GlobalStyle from './styles/globalStyles';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />

        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/list-trips' element={<ListTripsPage />} />

          <Route path='/aplication-form' element={<AplicationForm />} />
          <Route path='/login' element={<Login />} />

          <Route
            path='/dashboard/*'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
