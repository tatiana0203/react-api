import React, { Component } from "react";

import "./planetsList.css";

class PlanetsList extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      planets: [],
      planet: {
        name: "",
        population: "",
        terrain: "",
      },
      page: 1,
      pageCount: 7,
    };
  }

  requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  setPlanets = (result) => {
    this.setState({
      planets: result.results,
    });
  };

  setPlanet = (name, population, terrain) => {
    this.setState({
      planet: {
        name: name,
        population: population,
        terrain: terrain,
      },
    });
  };

  planetRequest = (number) =>
    fetch(`https://swapi.dev/api/planets/?page=${number}`, this.requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setPlanets(result);
      })
      .catch((error) => console.log("error", error));

  componentDidMount() {
    this.planetRequest(this.state.page);
  }

  nextPage = () => {
    if (this.state.page !== this.state.pageCount) {
      this.setState({ page: this.state.page + 1 });
      this.planetRequest(this.state.page);
    }
  };

  prevPage = () => {
    if (this.state.page !== 1) {
        this.setState({ page: this.state.page - 1 });
        this.planetRequest(this.state.page);
      }
    };
  

  render() {
    return (
      <div className="planets-list">
        <div>
          {this.state.planets.map((planet) => {
            return (
              <ul key={planet.name}>
                <button
                  onClick={() => {
                    this.setPlanet(
                      planet.name,
                      planet.population,
                      planet.terrain
                    );
                  }}
                >
                  {planet.name}
                </button>
              </ul>
            );
          })}
          <button onClick={this.prevPage}>prev</button>
          <button onClick={this.nextPage}>next</button>
        </div>

        <div className="card">
          <h2>Name : {this.state.planet.name}</h2>
          <h2>Population : {this.state.planet.population}</h2>
          <h2>Terrain : {this.state.planet.terrain}</h2>
        </div>
      </div>
    );
  }
}
export default PlanetsList;
