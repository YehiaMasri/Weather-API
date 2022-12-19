import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import "./AllDay.css";

class AllDay extends React.Component {
  render() {
    return (
      <div className="all-Day">
        <div className="time-instant">
          <time className="time" >3:00</time>
          <div className="bottom-img">
            <img src={mostlycloudy} alt=""></img>
          </div>
          <p className="degree">33&deg;C</p>
        </div>
        <div className="time-instant">
          <time className="time" >6:00</time>
          <div className="bottom-img">
            <img src={mostlycloudy} alt="weather image"></img>
          </div>
          <p className="degree">33&deg;C</p>
        </div>
        <div className="time-instant">
          <time className="time" >9:00</time>
          <div className="bottom-img">
            <img src={clear} alt="weather image"></img>
          </div>
          <p className="degree">33&deg;C</p>
        </div>
        <div className="time-instant">
          <time className="time" >12:00</time>
          <div className="bottom-img">
            <img src={clear} alt="weather image"></img>
          </div>
          <p className="degree">33&deg;C</p>
        </div>
        <div className="time-instant">
          <time className="time" >15:00</time>
          <div className="bottom-img">
            <img src={clear} alt="weather image"></img>
          </div>
          <p className="degree">13&deg;C</p>
        </div>
        <div className="time-instant">
          <time className="time" >18:00</time>
          <div className="bottom-img">
            <img src={clear} alt="weather image"></img>
          </div>
          <p className="degree">15&deg;C</p>
        </div>
        <div className="time-instant">
          <time className="time" >21:00</time>
          <div className="bottom-img">
            <img src={mostlycloudy} alt="weather image"></img>
          </div>
          <p className="degree">12&deg;C</p>
        </div>
      </div>
    );
  }
}

export default AllDay;