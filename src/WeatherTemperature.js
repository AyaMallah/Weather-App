
import React, { useState } from "react";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState('metric')

  function showFarenheit(event) {
    event.preventDefault()
    setUnit('imperial')
  }

  function showCelsius(event) {
    event.preventDefault()
    setUnit('metric')

  }
  if (unit === 'metric') {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>°C</a> |
          <a href="/" onClick={showFarenheit}> °F</a>
        </span>
      </div>
    )
  } else {
    let farenheit = (props.celsius * 9 / 5) + 32
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showFarenheit}>°F</a> |
          <a href="/" onClick={showCelsius}> °C</a>
        </span>
      </div>
    )

  }

}
export default WeatherTemperature