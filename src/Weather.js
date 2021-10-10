import React, { useState } from "react";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: (response.data.name),
      date: new Date(response.data.dt * 1000),
      temperature: (Math.round(response.data.main.temp)),
      description: (response.data.weather[0].description),
      humidity: (response.data.main.humidity),
      wind: (response.data.wind.speed),
      icon: (
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      )
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "e36512df4df508262b473b23a2ee8768";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse)
  }

  if (weatherData.ready) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter city..."
            autoFocus="on"
            className="w-50"
            onChange={handleChange}
          />
          <input type="submit" value="Search" />
        </form>
        {/* <input type="submit" value="Current" /> */}
        <WeatherInfo data={weatherData} />
      </>
    )
  } else {
    search()
    return "Loading..."
  }
}
export default Weather