import React from "react";
import WeatherIcon from "./WeatherIcon";
import './ForecastDay.css'

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
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div className="min-max">
        <span className="temp-max">{maxTemp()} / </span>
        <span className="temp-min"> {minTemp()}</span>
      </div>
    </div>
  )
}
export default ForecastDay