import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function HomeSearch() {

  const [city, setCity] = useState('');

  function handleSearchInput(e) {
    const cityName = e.target.value;
    setCity(cityName);
  }

  return (
    <div className="home__search">
      <input className="home__search--input" type="text" placeholder="City" onChange={handleSearchInput} />
      <Link to="/weather" state={{ city: city}} className="btn btn-primary">Display Weather</Link>
    </div>
  );
}

export default HomeSearch;