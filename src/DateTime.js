import React from "react";
import "./date-time.css";

export default function DateTime() {
  const timestamp = Date.now();
  console.log(timestamp);

  let time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(timestamp);

  return (
    <div className="date-row">
      <div className="date-time"> {time}</div>
    </div>
  );
}
