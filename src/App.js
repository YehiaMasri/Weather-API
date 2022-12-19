import React, { Component } from "react";
import Search from "./components/Search";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">

        <header className="header">
          <div className="search">
            <input className="input" type="text" placeholder="Enter The City Name" />
            <button className="button">Get The Weather</button>
          </div>
        </header>
        <main className="main">
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
            
          </div>


        </main>

      </div>
    )
  }
}

// handleInputChange = value => {
//   this.setState({ name: value });
// };

// render() {
//   return (
//     <div className="app">
//       <SayHi />
//       <SayHello color="black" name={this.state.name} />
//       <Search handleInput={this.handleInputChange} />
//     </div>
//   );
// }


export default App;
