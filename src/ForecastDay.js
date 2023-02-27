import React from "react";
import ForecastIcon from "./ForecastIcon";
import "./forecast-day.css";

export default function ForecastDay({ forecast }) {
  function day() {
    let date = new Date(forecast.time * 1000);
    let day = date.getDay();
    let weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return weekdays[day];
  }

  return (
    <div className="col-2">
      <ul className="weekday">
        <li className="day">{day()}</li>
        <li className="weather-icon">
          <ForecastIcon icon={forecast.condition.icon} />
        </li>
        <li className="day-temperature">
          <span className="minT">
            {Math.round(forecast.temperature.minimum)}°↓
          </span>

          <span className="maxT">
            {" "}
            {Math.round(forecast.temperature.maximum)}°↑
          </span>
        </li>
      </ul>
    </div>
  );
}
