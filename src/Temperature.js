import React, { useState } from "react";
import "./temperature.css";

export default function Temperature({ temp }) {
  let [unit, SetUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDeafault();
    SetUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDeafault();
    SetUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <h2>
        {temp}°
        <span className="units-cf">
          C
          <button className="f" href="" onClick={convertToF}>
            | F
          </button>
        </span>
      </h2>
    );
  } else {
    let tempF = (temp * 9) / 5 + 32;
    return (
      <h2>
        {tempF}°
        <span className="units-cf">
          <button className="c" href="" onClick={convertToC}>
            C |
          </button>
          F
        </span>
      </h2>
    );
  }
}
