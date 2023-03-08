import "./App.css";
import React, { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import DateTime from "./DateTime.js";
import locationPin from "./img/locationPin.svg";
import Forecast from "./Forecast";

export default function App() {
  let [changedInput, setChangedInput] = useState("");
  let [city, setCity] = useState("");
  let [coord, setCoord] = useState({ ready: false });

  function handleSearch(event) {
    event.preventDefault();
    setChangedInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCity(changedInput);
  }
  function updateCoordinates(response) {
    setCoord({
      ready: true,
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    });
  }

  useEffect(() => {
    const apiKey = `c7546b821a53b6bba326661973b08c2d`;
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    axios.get(url).then(updateCoordinates);
  }, [city]);

  function handleLocationSearch(event) {
    function sucess(position) {
      const crd = position.coords;
      setCoord({
        ready: true,
        lat: crd.latitude,
        lon: crd.longitude,
      });
    }
    navigator.geolocation.getCurrentPosition(sucess);
  }
  if (coord.ready !== false) {
    return (
      <div className="app">
        <header className="container">
          <DateTime />

          <form className="search-row" onSubmit={handleSubmit}>
            <button
              className="location-pin-button"
              type="submit"
              onDoubleClick={handleLocationSearch}
            >
              <img className="pin" src={locationPin} alt="location pin" />
            </button>
            <input
              placeholder="Type in city"
              type="search"
              onChange={handleSearch}
            />
          </form>
        </header>

        <CurrentWeather coord={coord} />
        <Forecast coord={coord} />
        <footer>
          <a
            className="link"
            href="https://github.com/unicornbug/purple-weather"
          >
            source code by unicornbug
          </a>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="app">
        <header className="container">
          <DateTime />

          <form className="search-row" onSubmit={handleSubmit}>
            <button
              className="location-pin-button"
              type="submit"
              onDoubleClick={handleLocationSearch}
            >
              <img className="pin" src={locationPin} alt="location pin" />
            </button>
            <input
              placeholder="Type in city"
              type="search"
              onChange={handleSearch}
            />
          </form>
        </header>
        <p className="instructions">
          <span>Enter city name or </span>
          <span>
            <em> double click </em>
          </span>
          <span> on location pin for your local weather.</span>
        </p>
        <footer>
          <a
            className="link"
            href="https://github.com/unicornbug/purple-weather"
          >
            source code by unicornbug
          </a>
        </footer>
      </div>
    );
  }
}
