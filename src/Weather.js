import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import "./styles.css";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [searchedCity, setSearchedCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      coordinates: response.data.coordinates,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      iconUrl: response.data.condition.icon_url,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    setSearchedCity(city);
    let apiKey = "o091fdfe309a88f508fe60bcaa4tc41a";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="d-flex">
          <div className="current-weather">
            <h1>
              {" "}
              It's <strong>
                {Math.round(weather.temperature)}ºC
              </strong> this{" "}
              <strong>
                <FormattedDate date={weather.date} />
              </strong>{" "}
              in <strong>{searchedCity}</strong>
            </h1>
            <div className="align-items-center">
              <img src={weather.iconUrl} alt="Weather icon" />
              <p className="current-details">
                We have {weather.description}, the wind speed is {weather.wind}{" "}
                km/h and humidity is at {weather.humidity}%<br />
              </p>
            </div>
          </div>
          <WeatherForecast coordinates={weather.coordinates} data={weather} />
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
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/sarahatesyou/"
            target="_blank"
            rel="noreferrer"
          >
            sarahatesyou
          </a>
          🦇 and is on{" "}
          <a
            href="https://github.com/sarahatesyou/sadies-weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://sadies-weather-react-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
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
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/sarahatesyou/"
            target="_blank"
            rel="noreferrer"
          >
            sarahatesyou
          </a>
          🦇 and is on{" "}
          <a
            href="https://github.com/sarahatesyou/sadies-weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://sadies-weather-react-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    );
  }
}
