import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import "./CurrentWeather.css";

class CurrentWeather extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <img className="big_img" src={mostlycloudy} alt="strom icon" />

        <div className="description">Overcast clouds</div>
        <div className="temperature">
          <p className="temp">Temperatur &nbsp;</p>
          <p className="temperatur-nbr">10&deg; to 11&deg;C </p>
        </div>
        <div className="humidity">
          <p className="humditi">humidity &nbsp; &nbsp;</p>
          <p className="humdity-nbr">78%&nbsp; &nbsp;</p>
          <p className="pressure">pressure &nbsp; &nbsp;</p>
          <p className="pressure-nbr">1008.48</p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;