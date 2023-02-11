import "./App.css";
import cloudy from "./img/cloudy.png";

export default function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="date-row">
          <div class="date">Monday </div>
          <div class="date">13:02 </div>
          <div class="date">16/2/2017 </div>
        </div>

        <form className="search-row">
          <button type="submit">📍</button>
          <input placeholder="Type in city" type="search" />
        </form>
      </header>
      <body>
        <div className="current-weather">
          <div className="current-weather-col">
            <h1>Dublin</h1>
            <ul>
              <li>Feels like:15C</li>
              <li>10/9</li>
            </ul>
          </div>

          <img src={cloudy} alt="weather icon" />
          <div className="current-weather-col">
            <h2>20C</h2>
            <ul>
              <li>Humidity: 40%</li>
              <li>Pressure: 40%</li>
              <li>Wind: 40%</li>
            </ul>
          </div>
        </div>
        <div className="Forecast">
          <div>Mon</div>
          <img src={cloudy} alt="weather icon" />
          <div>
            <span className="max-tem">{20}↑</span>
            <span className="min-tem"> {15}↓</span>
          </div>
        </div>
      </body>
      <footer>
        <a href="https://github.com/unicornbug/purple-weather">GitHub link</a>
      </footer>
    </div>
  );
}
