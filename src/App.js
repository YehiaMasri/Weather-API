import React, { Component } from "react";
import Search from "./components/Search";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import CurrentWeather from "./components/CurrentWeather";
import AllDay from "./components/AllDay";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ""
    };
  }
  handleInputChange = value => {
    this.setState({ city: value });
  };

  render() {
    return (
      <div className="app">

        <header className="header">
         <Search handleInputChange={this.handleInputChange}/>
        </header>
        <main className="main">
          <CurrentWeather/>
          <AllDay/>
        </main>

      </div>  
    );  
  }
}

export default App;
