import React from 'react';
import Button from '../common/Button';

function Landing() {

  return (
    <div className="landing">
      <p className="landing__welcome u-margin-bottom-small">
      Welcome to the weather forecast web application. Please login with your Github user
      to use the application and view the weather in your city.
      </p>
      <Button label="Login" />
    </div>
  );
}

export default Landing;