import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  let location = useLocation();
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to='/login' state={{ from: location }} />;
}

export default PrivateRoute;
