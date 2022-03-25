import React from 'react';
// import CloudIcon from '@mui/icons-material/Cloud';
import { ReactComponent as Cloudy } from './svg/cloudy.svg';

function Header() {

  return (
    <header className="header">
      <Cloudy />
      <h1 className="heading__primary">Weather Forecast</h1>
    </header>
  )
}

export default Header;