import React, { useState } from "react";
import axios from 'axios'
import ForecastDay from "./ForecastDay";

function Forecast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null)

  function handleResponse(response) {
    // console.log(response.data.daily)
    setForecast(response.data.daily)
    setLoaded(true)
  }

  function load() {
    let apiKey = "1b72ca1b30be9a67a9ee50df270b7258";
    let longitude = props.coordinates.lon
    let latitude = props.coordinates.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
  }


  if (loaded) {
    return (
      <>
        <h4>6 Day Forecast</h4>
        <div className="row forecast">
          {forecast.map(function (daily, index) {
            if (index < 5) {
              return (
                <ForecastDay data={daily} key={index} />
              )
            } else {
              return null
            }
          })}
        </div>
      </>
    )
  } else {
    load()
    return null
  }

}
export default Forecast