import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

import Home from './pages/Home';
import ListTripsPage from './pages/ListTripsPage';
import AplicationForm from './pages/ApplicationForm';
import Login from './pages/Login';

import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/list-trips' element={<ListTripsPage />} />

          <Route path='/aplication-form' element={<AplicationForm />} />

          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
