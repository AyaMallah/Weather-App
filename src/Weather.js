import React from "react";

function Weather() {
  return (
    <>
      <div className="city">
        <h2>London</h2>
        <p>Thursday 10:45</p>
      </div>
      <div className="details">
        <div>
          <p>15°C</p>
          <p>Cloudy sky</p>
        </div>
        <div>
          <p>Humidity: 40%</p>
          <p>Wind: 9 km/h</p>
        </div>
      </div>
    </>
  )
}
export default Weather