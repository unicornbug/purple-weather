import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./current-weather.css";
import axios from "axios";

export default function CurrentWeather({ coord }) {
  let [data, setData] = useState({ ready: false });

  function handleWeatherData(response) {
    setData({
      ready: true,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      feels: response.data.main.feels_like,
      minT: response.data.main.temp_min,
      maxT: response.data.main.temp_max,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  useEffect(() => {
    const apiKey = `c7546b821a53b6bba326661973b08c2d`;
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(weatherUrl).then(handleWeatherData);
  }, [coord]);

  if (data.ready !== false) {
    return (
      <div className="current-weather">
        <div className="current-weather-col">
          <h1>{data.cityName}</h1>

          <ul>
            <li>Humidity: {data.humidity}%</li>
            <li>Pressure: {Math.round(data.pressure / 10) / 100} bar</li>
            <li>Wind: {Math.round(data.wind * 10) / 10} m/s</li>
          </ul>
        </div>

        <WeatherIcon icon={data.icon} />
        <div className="current-weather-col">
          <ul>
            <li className="description">{data.description}</li>

            <Temperature
              temp={data.temp}
              feels={data.feels}
              minT={data.minT}
              maxT={data.maxT}
            />
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <p>
        Enter city name or double click on location pin for your local weather
      </p>
    );
  }
}
