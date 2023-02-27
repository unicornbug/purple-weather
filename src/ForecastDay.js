import React from "react";
import ForecastIcon from "./ForecastIcon";
import "./forecast-day.css";

export default function ForecastDay({ forecast, unit }) {
  let day = "";
  day = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(1677758400);
  if (unit !== "fahrenheit")
    return (
      <div className="col-2">
        <ul className="weekday">
          <li className="day">{day}</li>
          <li className="weather-icon">
            <ForecastIcon icon={forecast.condition.icon} />
          </li>
          <li className="day-temperature">
            <span className="minT">
              {Math.round(forecast.temperature.minimum)}°↓
            </span>
            <span className="maxT">
              {Math.round(forecast.temperature.maximum)}°↑
            </span>
          </li>
        </ul>
      </div>
    );
  else {
    let minTF = (forecast.temperature.minimum * 9) / 5 + 32;
    let maxTF = (forecast.temperature.maximum * 9) / 5 + 32;
    return (
      <div className="col-2">
        <ul className="weekday">
          <li className="day">{day}</li>
          <li className="weather-icon">
            <ForecastIcon icon={forecast.condition.icon} />
          </li>
          <li className="day-temperature">
            <span className="minT">{Math.round(minTF)}°↓</span>
            <span className="maxT">{Math.round(maxTF)}°↑</span>
          </li>
        </ul>
      </div>
    );
  }
}
