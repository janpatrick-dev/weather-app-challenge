import React from 'react';
import LoginButton from '../../Components/Buttons/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

function Landing() {

  return (
    <div className="landing">
      <p className="landing__welcome u-margin-bottom-small">
      Welcome to the weather forecast web application. Please login with your Github user
      to use the application and view the weather in your city.
      </p>
      <LoginButton label="Login" />
    </div>
  );
}

export default Landing;