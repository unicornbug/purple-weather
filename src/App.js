import "./App.css";
import React, { useState } from "react";
import cloudy from "./img/cloudy.png";
import CurrentWeather from "./CurrentWeather";

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
        <div className="date-row">
          <div className="date">Monday </div>
          <div className="date">13:02 </div>
          <div className="date">16/2/2017 </div>
        </div>

        <form className="search-row" onSubmit={handleSubmit}>
          <button type="submit">📍</button>
          <input
            placeholder="Type in city"
            type="search"
            onChange={handleSearch}
          />
        </form>
      </header>
      <body>
        <CurrentWeather city={city} />
      </body>
      <footer>
        <a href="https://github.com/unicornbug/purple-weather">GitHub link</a>
      </footer>
    </div>
  );
}
