import React from 'react';
import LogoutButton from './common/LogoutButton';
// import CloudIcon from '@mui/icons-material/Cloud';
import { ReactComponent as Cloudy } from './svg/cloudy.svg';

function Header(props) {

  return (
    <header className="header">
      <Cloudy />
      <h1 className="heading__primary">Weather Forecast</h1>
      { props.isAuthenticated && <LogoutButton /> }
    </header>
  )
}

export default Header;