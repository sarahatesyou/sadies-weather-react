import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
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
        <header>
          <div className="current-weather">
            <div>
              <h2>
                It's {Math.round(weather.temperature)}ºC in {city}
              </h2>
              <p className="current-details">
                We have {weather.description}, the wind speed is {weather.wind}
                km/h and humidity is at {weather.humidity}%
              </p>
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
          <div className="weekly-forecast" id="forecast"></div>
        </header>
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
