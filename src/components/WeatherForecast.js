import React from "react";

function WeatherForecast(props) {
  return (
    <div className="weather">
      <img src={props.img} alt="weather icon" />
      <p>
        <span>conditions:</span> {props.conditions}
      </p>
      <p>
        <span>time:</span> {props.time}
      </p>
    </div>
  );
}

export default WeatherForecast;
