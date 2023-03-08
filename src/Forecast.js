import React, { useState, useEffect } from "react";
import axios from "axios";
import "./forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast({ coord }) {
  let [data, setData] = useState({ ready: false });

  function handleForecastData(response) {
    console.log(response.data);

    setData({
      ready: true,
      forecast: response.data.daily,
    });
  }

  useEffect(() => {
    const key = `ca8fboc4888373atb3f492ce6063330f`;
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coord.lon}&lat=${coord.lat}&key=${key}&units=metric`;
    axios.get(forecastUrl).then(handleForecastData);
  }, [coord]);

  if (data.ready !== false) {
    return (
      <div className="row">
        {data.forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div key={index}>
                <ForecastDay forecast={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return <p>forecast loading</p>;
  }
}
