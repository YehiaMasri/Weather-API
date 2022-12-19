import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <form>
          <input className="input" type="text" placeholder="Enter The City Name" onChange={event => {
            this.setState({ input: event.target.value });}}
             />
          <button  className="button" onClick={event => {
            this.props.handleInput(this.state.input);}}>Get The Weather</button>
        </form>
      </div>

    );
  }
}
export default Search;
