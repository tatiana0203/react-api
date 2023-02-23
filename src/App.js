import React, { Component } from "react";

import PeopleList from "./components/peopleList/peopleList";
import PlanetsList from "./components/planetsList/planetsList";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <div>
          <button >People</button>
          <button >Planets</button>
          <button >Starships</button>
        </div>
        <PeopleList resource="people"/>
        <PlanetsList />
        
      </div>
    );
  }
}

export default App;
