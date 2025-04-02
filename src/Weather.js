import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [searchedCity, setSearchedCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    setSearchedCity(city);
    let apiKey = "eae061c95483dd066657bfc7525418ed";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="current-weather">
          <h1>
            {" "}
            It's <strong>{Math.round(weather.temperature)}ºC</strong> this{" "}
            <strong>
              <FormattedDate date={weather.date} />
            </strong>{" "}
            in <strong>{searchedCity}</strong>
          </h1>
          <div className="d-flex  align-items-center">
            <img src={weather.iconUrl} alt="Weather icon" />
            <p className="current-details">
              We have {weather.description}, the wind speed is {weather.wind}{" "}
              km/h and humidity is at {weather.humidity}%<br />
            </p>
          </div>
        </div>
        <main>
          <form onSubmit={handleSearch}>
            <input
              type="Search"
              placeholder="Type a City"
              onChange={updateCity}
              className="input-search"
            />
            <input type="submit" value="🔎" className="button-search" />
          </form>
        </main>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Weather App</h1>
        <main>
          <form onSubmit={handleSearch}>
            <input
              type="Search"
              placeholder="Type a City"
              onChange={updateCity}
              className="input-search"
            />
            <input type="submit" value="🔎" className="button-search" />
          </form>
        </main>
      </div>
    );
  }
}
