import "./App.css";
import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import DateTime from "./DateTime.js";
import locationPin from "./img/locationPin.svg";

export default function App() {
  let [city, setCity] = useState("");
  let [changedInput, setChangedInput] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    setChangedInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCity(changedInput);
  }
  return (
    <div className="App">
      <header className="container">
        <DateTime />

        <form className="search-row" onSubmit={handleSubmit}>
          <button type="submit">
            <img className="pin" src={locationPin} alt="location pin" />
          </button>
          <input
            placeholder="Type in city"
            type="search"
            onChange={handleSearch}
          />
        </form>
      </header>
      <div>
        <CurrentWeather city={city} />
      </div>
      <footer>
        <a href="https://github.com/unicornbug/purple-weather">GitHub link</a>
      </footer>
    </div>
  );
}
