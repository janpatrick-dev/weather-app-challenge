import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function PublicRoute() {
  const location = useLocation();
  const { isAuthenticated } = useAuth0();

  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" replace state={{ from: location }} />;
}

export default PublicRoute;