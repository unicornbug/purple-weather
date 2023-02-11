import React, { useEffect, useState } from "react";
import cloudy from "./img/cloudy.png";

import axios from "axios";

export default function CurrentWeather({ city }) {
  const apiKey = `c7546b821a53b6bba326661973b08c2d`;
  let [coord, setCoord] = useState({});
  let [data, setData] = useState(null);

  function updateCoordinates(response) {
    setCoord(response.data[0]);
  }

  function handleWeatherData(response) {
    setData(response.data);
    console.log(data);
  }

  useEffect(() => {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(weatherUrl).then(handleWeatherData);
  }, [coord]);

  useEffect(() => {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    axios.get(url).then(updateCoordinates);
  }, [city]);

  return (
    <div className="current-weather">
      <div className="current-weather-col">
        <h1>{data.name}</h1>
        <h3>{data.weather[0].description}</h3>
        <ul>
          <li>Feels like: {data.main.feels_like}</li>
          <li>
            <span>{data.main.temp_min}↓</span>
            <span> {data.main.temp_max}↑</span>
          </li>
        </ul>
      </div>

      <img src={cloudy} alt="weather icon" />
      <div className="current-weather-col">
        <h2>{Math.round(data.main.temp)}°C</h2>
        <ul>
          <li>Humidity: {data.main.humidity}%</li>
          <li>Pressure: {data.main.pressure} Pa</li>
          <li>Wind: {data.wind.speed}m/s</li>
        </ul>
      </div>
    </div>
  );
}
