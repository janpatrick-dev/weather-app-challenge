import React from 'react';
import HomeSearch from './HomeSearch';
import {useAuth0} from '@auth0/auth0-react';

function Home() {

  const { user } = useAuth0();

  console.log(user);
  
  return user ? (
    <div className="home">
      <div className="home__profile u-margin-bottom-large">
        <p className="home__profile--name">{ user.name ? user.name : user.nickname }</p>
        <a href={`https://github.com/${user.nickname}`} target="_blank" className="home__profile--github">{`https://github.com/${user.nickname}`}</a>
      </div>
      <HomeSearch />
    </div>
  ) : null;
}

export default Home;