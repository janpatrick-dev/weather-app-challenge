import React from 'react';

function HomeSearchItem(props) {
  
  return  (
    <p className="home__search--item"> 
      { props.data.name }, { props.data.state && (`${props.data.state},`) } { props.data.country }
    </p>
  );
}

export default HomeSearchItem;