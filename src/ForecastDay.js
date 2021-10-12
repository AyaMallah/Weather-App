import React from "react";
import WeatherIcon from "./WeatherIcon";


function ForecastDay(props) {

  function maxTemp() {
    let temp = Math.round(props.data.temp.max)
    return `${temp}°`
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min)
    return `${temp}°`
  }

  function day() {
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay()

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days[day]
  }

  // console.log(props.data)

  return (
    <div className="col">
      <div>{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div>
        <span className="temp-max">{maxTemp()} </span>
        <span className="temp-min"> {minTemp()}</span>
      </div>
    </div>
  )
}
export default ForecastDay