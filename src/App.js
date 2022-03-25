import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Layouts/Header';
import Home from './Pages/Home/Home';
import Landing from './Pages/Landing/Landing';
import PageNotFound from './Pages/PageNotFound';
import PublicRoute from './Routes/PublicRoute';
import ProtectedRoute from './Routes/ProtectedRoute';
import Weather from './Pages/Weather/Weather';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Layouts/Loading';

function App() {
  
  const { isLoading } = useAuth0();

  return (
    <>
      <Router>
        <Header />
        {isLoading ? <Loading loading={isLoading} size={150} /> :
        <Routes>
          <Route exact path="/" element={<PublicRoute />}>
            <Route exact path="/" element={<Landing />} />
          </Route>
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/weather" element={<Weather />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        }
      </Router>
    </>
  );
}

export default App;
