import React, { Component } from "react";

import PeopleList from "./components/peopleList/peopleList";
import PlanetsList from "./components/planetsList/planetsList";
import StarshipsList from "./components/starshipsList/starshipsList";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentList: "",
      list:[]
    };
  }

  requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  setList = (resource, result) => {
    this.setState({
      list:result.results,
      currentList: resource,
    });
  };

   myRequest = (resource) =>
    fetch(`https://swapi.dev/api/${resource}`, this.requestOptions)
      .then((response) => response.json())
      .then((result) => this.setList(resource, result))
      .catch((error) => console.log("error", error));


  showList = (resource)  => {
    switch (resource){
      case "people":
        return <PeopleList people={this.state.list} />;
      case "planets":
        return <PlanetsList planets={this.state.list} />;
      case "starships":
        return <StarshipsList starships={this.state.list} />;
      default:
        return null
    }
  }

 


  render() {
    return (
      <div className="main-content">

        <div className="buttons-menu">
          <button onClick={() => this.myRequest("people")}>People</button>
          <button onClick={() => this.myRequest("planets")}>Planets</button>
          <button onClick={() => this.myRequest("starships")}>Starships</button>
        </div>

        {this.showList(this.state.currentList)}
        
      </div>
    );
  }
}

export default App;
