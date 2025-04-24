import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.time * 1000);
  let iconUrl = props.data.condition.icon_url;
  return (
    <div>
      <div className="WF-weekday">
        <FormattedDate date={date} short={true} />
      </div>
      <div className="WF-icon">
        <img src={iconUrl} alt="Weather icon" />
      </div>
      <div className="WF-forecast-temp">
        <span className="WF-temp-max">
          {Math.round(props.data.temperature.maximum)}º
        </span>{" "}
        |{" "}
        <span className="WF-temp-min">
          {Math.round(props.data.temperature.minimum)}º
        </span>
      </div>
    </div>
  );
}
