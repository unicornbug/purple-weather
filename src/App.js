import "./App.css";
import React, { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import DateTime from "./DateTime.js";
import locationPin from "./img/locationPin.svg";

export default function App() {
  let [changedInput, setChangedInput] = useState("");
  let [city, setCity] = useState("");
  let [coord, setCoord] = useState({});

  function handleLocationSearch(event) {
    function sucess(position) {
      const crd = position.coords;
      setCoord({
        lat: crd.latitude,
        lon: crd.longitude,
      });
    }
    navigator.geolocation.getCurrentPosition(sucess);
  }

  function handleSearch(event) {
    event.preventDefault();
    setChangedInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCity(changedInput);
  }
  function updateCoordinates(response) {
    setCoord(response.data[0]);
  }

  useEffect(() => {
    const apiKey = `c7546b821a53b6bba326661973b08c2d`;
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    axios.get(url).then(updateCoordinates);
  }, [city]);

  return (
    <div className="app">
      <header className="container">
        <DateTime />

        <form className="search-row" onSubmit={handleSubmit}>
          <button
            className="pin-button"
            type="submit"
            onClick={handleLocationSearch}
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

      <footer>
        <a className="link" href="https://github.com/unicornbug/purple-weather">
          source code by unicornbug
        </a>
      </footer>
    </div>
  );
}
