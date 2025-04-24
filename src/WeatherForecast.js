import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded && Array.isArray(forecast)) {
    return (
      <div className="WeatherForecast">
        <h1>Weekly forecast</h1>
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index >= 1 && index < 7) {
              return (
                <div className="col-md-4 mb-3" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "o091fdfe309a88f508fe60bcaa4tc41a";
    const units = "metric";
    const longitude = props.coordinates.longitude;
    const latitude = props.coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
