//import React from "react";
import React from "react";
import "./styles.css";
import WeatherCard from "./components/WeatherForecast";

import weatherData from "./weatherData";

export default function App() {
  const weatherForecast = weatherData.map((object, arrayIndex) => {
    return (
      <WeatherCard
        key={arrayIndex}
        img={object.img}
        conditions={object.conditions}
        time={object.time}
      />
    );
  });

  console.log(weatherForecast);
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section className="cards">{weatherForecast}</section>
    </div>
  );
}
