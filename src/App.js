import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Porto" />

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
    </div>
  );
}
