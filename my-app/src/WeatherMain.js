import React, { useState } from 'react';
import "./index.css";

import WeatherData from './WeatherData';

import axios from 'axios';

export default function WeatherMain(props) {
  const [weather, setWeather] = useState({loaded: false});
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    console.log(response.data);

    setWeather({
      loaded: true,
      date: new Date(response.data.dt * 1000), 
      city: response.data.name,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      temp: response.data.main.temp,
      desc: response.data.weather[0].description,
      feel: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humid: response.data.main.humidity,
    });
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0776b8bb0b1556bee1e5658c3acf0c4&units=metric`;
    axios.get(url).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      
      <div className="row">
        <div className="col-4">
          <form id="citySearch" onSubmit={handleSubmit}>
            <input id="cityInput" type="search" placeholder="Enter a city" onChange={handleCitySearch} />
            <input type="submit" value="search" className="button" />
          </form>
        </div>  

        <WeatherData data = {weather} />
    
      </div>
    );

  } else {
    search();
    return "Loading..."
  }
}