import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from 'axios'

function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data)
  }

  let apiKey = "e36512df4df508262b473b23a2ee8768";
  let longitude = props.coordinates.lon
  let latitude = props.coordinates.lat
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse)

  return (
    <>
      <h4>6 Day Forecast</h4>
      <div className="row forecast">
        <div className="col">
          <div>Tue.</div>
          <WeatherIcon code="01d" size={36} />
          <div>
            <span className="temp-max">18° </span>
            <span className="temp-min"> 15°</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Forecast