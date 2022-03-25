import React from 'react';
import Header from './Header';
import Home from './home/Home';
import Landing from './landing/Landing';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      { isAuthenticated ? <Home user={user} /> : <Landing /> }
    </>
  );
}

export default App;
