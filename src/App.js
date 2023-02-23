import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "",
        gender: "",
        birth_year: "",
        hair_color: "",
        eye_color: "",
      },
      starship: {
        name: "",
        model: "",
        manufacturer: "",
      },
      planet: {
        name: "",
        diameter: "",
        population: "",
        terrain: "",
      },
    };
  }
  setPerson = (result) => {
    this.setState({
      person: {
        name: result.name,
        gender: result.gender,
        birth_year:result.birth_year,
        hair_color: result.hair_color,
        eye_color:result.eye_color
      },
    });
  };

  requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  
  
  myRequest = (number) =>
    fetch(`https://swapi.dev/api/people/${number}`, this.requestOptions)
      .then((response) => response.json())
      .then((result) => this.setPerson(result))
      .catch((error) => console.log("error", error));

  componentDidMount() {
    this.myRequest(45);
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <button onClick={()=>this.componentDidMount}>People</button>
            <button>Planets</button>
            <button>Starships</button>
          </ul>
        </div>
        <div className="list"></div>
        <div className="card">
          <h2>{this.state.person.name}</h2>
          <h2>{this.state.person.gender}</h2>
          <h2>{this.state.person.birth_year}</h2>
          <h2>{this.state.person.hair_color}</h2>
          <h2>{this.state.person.eye_color}</h2>
        </div>
      </div>
    );
  }
}

export default App;
