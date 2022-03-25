import React from 'react';
import LogoutButton from '../Components/Buttons/LogoutButton';
import { ReactComponent as Cloudy } from '../Assets/Images/svg/cloudy.svg';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function Header() {

  const { isAuthenticated } = useAuth0();

  return (
    <header className="header">
      <div className="header__logo">
        <Cloudy />
        <h1 className="heading__primary">Weather Forecast</h1>
      </div>
      { isAuthenticated && 
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--item">
            <Link to="/home" className="u-text-decoration-none">Home</Link>
          </li>
          <li className="header__nav--item">
            <Link to="/weather" className="u-text-decoration-none">Weather</Link>
          </li>
        </ul>
        <LogoutButton />
      </nav>
      }
    </header>
  )
}

export default Header;