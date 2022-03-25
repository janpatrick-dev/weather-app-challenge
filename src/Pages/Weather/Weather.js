import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import Loading from "../../Layouts/Loading";

function Weather() {

  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.state.city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => {
        setWeatherData(response.data);
        setLoading(false);
        localStorage.setItem('weatherData', JSON.stringify(response.data));
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      const weatherDataCache = JSON.parse(localStorage.getItem('weatherData'));
      if (weatherDataCache) {
        setWeatherData(weatherDataCache);
      }
    }
  }, [])

  setTimeout(() => {
    setLoading(false);
  }, 10000)

  function formatDateToMMDDYYYY() {
    const date = new Date(weatherData.dt * 1000);
    const month = date.getMonth() + 1; // +1 because date.getMonth() is 0-indexed
    const day = date.getDay();
    const year = date.getFullYear();
    return `${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}/${year}`; // add 0 at the beginning if month/day is less than 10
  }

  function formatPlaceName() {
    const country = weatherData.sys.country;
    const city = weatherData.name;
    return `${city}, ${country}`; // ex. Manila, PH
  }

  return Object.keys(weatherData).length !== 0 ? (
    <div className="weather">
      <h2>{formatPlaceName()}</h2>
      <div className="weather__table">
        <div className="weather__table--header-main">
          <div className="weather__table--cell">Date</div>
          <div className="weather__table--cell">&nbsp;</div>
          <div className="weather__table--cell">&nbsp;</div>
          <div className="weather__table--cell">&nbsp;</div>
          <div className="weather__table--cell">&nbsp;</div>
          <div className="weather__table--cell">&nbsp;</div>
        </div>
        <div className="weather__table--header-sub">
          <div className="weather__table--cell">(mm/dd/yyyy)</div>
          <div className="weather__table--cell">Temp(F)</div>
          <div className="weather__table--cell">Description</div>
          <div className="weather__table--cell">Main</div>
          <div className="weather__table--cell">Pressure</div>
          <div className="weather__table--cell">Humidity</div>
        </div>
        <div className="weather__table--header-value">
          <div className="weather__table--cell">{formatDateToMMDDYYYY()}</div>
          <div className="weather__table--cell">{weatherData.main.temp}</div>
          <div className="weather__table--cell u-text-transform-capitalize">{weatherData.weather[0].description}</div>
          <div className="weather__table--cell">{weatherData.weather[0].main}</div>
          <div className="weather__table--cell">{weatherData.main.pressure}</div>
          <div className="weather__table--cell">{weatherData.main.humidity}</div>
        </div>
      </div>
      <Link to="/home" className="weather__btn--back btn">Back</Link>
    </div>
  ) : loading ? <Loading loading={loading} size={150} /> : <div className="u-center-align">No data. :(</div>
}

export default Weather;