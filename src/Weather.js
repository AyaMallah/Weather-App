import React, { useState } from "react";
import './Weather.css';
import axios from "axios";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })

  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      city: (response.data.name),
      temperature: (Math.round(response.data.main.temp)),
      description: (response.data.weather[0].description),
      humidity: (response.data.main.humidity),
      wind: (response.data.wind.speed),
      icon: (
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      )
    })
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="weather">
          <h2>{weatherData.city}</h2>
          <ul>
            <li>Thursday 10:45</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6 d-flex mt-3">
              <img src={weatherData.icon} alt="weather" />
              <div>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    let apiKey = "e36512df4df508262b473b23a2ee8768";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse)
    return "Loading..."
  }
}
export default Weather