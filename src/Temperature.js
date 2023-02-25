import React, { useState } from "react";
import "./temperature.css";

export default function Temperature({ temp, feels, minT, maxT }) {
  let [unit, SetUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDefault();
    SetUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    SetUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <ul>
        <li>
          {" "}
          <h2>
            {Math.round(temp)}°
            <span className="units-cf">
              C
              <button className="f" href="" onClick={convertToF}>
                | F
              </button>
            </span>
          </h2>
        </li>

        <li>Feels like: {Math.round(feels)}°C</li>
        <li>
          <span className="minT">{Math.round(minT)}°↓</span>
          <span className="maxT"> {Math.round(maxT)}°↑</span>
        </li>
      </ul>
    );
  } else {
    let tempF = Math.round((temp * 9) / 5 + 32);
    let feelsF = Math.round((feels * 9) / 5 + 32);
    let minTF = Math.round((minT * 9) / 5 + 32);
    let maxTF = Math.round((maxT * 9) / 5 + 32);
    return (
      <ul>
        <li>
          {" "}
          <h2>
            {tempF}°
            <span className="units-cf">
              <button className="c" href="" onClick={convertToC}>
                C |
              </button>
              F
            </span>
          </h2>
        </li>
        <li>Feels like: {feelsF}°F</li>
        <li>
          <span className="minT">{minTF}°↓</span>
          <span className="maxT"> {maxTF}°↑</span>
        </li>
      </ul>
    );
  }
}
