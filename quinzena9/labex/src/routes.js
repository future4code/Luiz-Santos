import { Switch, Route } from 'react-router-dom';
import AplicationForm from './pages/ApplicationForm';
import Home from './pages/Home';
import ListTripsPage from './pages/ListTripsPage';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/list-trips'>
        <ListTripsPage />
      </Route>
      <Route path='/aplication-form'>
        <AplicationForm />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
  );
}
