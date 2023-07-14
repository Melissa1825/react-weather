import React, { useState } from 'react';
import "./index.css";

import WeatherData from './WeatherData';

import axios from 'axios';

export default function WeatherMain(props) {
  const [weather, setWeather] = useState({loaded: false});

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

  if (weather.loaded) {
    return (
      
      <div className="row">
        <div className="col-4">
          <form id="citySearch">
            <input id="cityInput" type="search" placeholder="Enter a city" />
            <input type="submit" value="search" className="button" />
          </form>
        </div>  

        <WeatherData data = {weather} />
    
      </div>
    );

  } else {
    let city = "Toronto";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0776b8bb0b1556bee1e5658c3acf0c4&units=metric`;
    axios.get(url).then(handleResponse)

    return "Loading..."

  }
}