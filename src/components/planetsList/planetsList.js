import React, { Component } from "react";

class PlanetsList extends Component {
  constructor() {
    super();
    this.state = {
      planet: {
        name: "",
        population: "",
        terrain: "",
      },
      cardVisible:false
    };
  }

  setPlanet = (name, population, terrain) => {
    this.setState({
      planet: {
        name: name,
        population: population,
        terrain: terrain,
      },
      cardVisible:true
    });
  };

  render() {
    return (
      <div className="content-block">
        <div className="list">
          {this.props.planets.map((planet) => {
            return (
                <button className="list-item" key={planet.name}
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
            );
          })}
        </div>

        <div className={this.state.cardVisible ? "card-visible" : "card-unvisible"}>
          <h3>{this.state.planet.name}</h3>
          <p>Population : {this.state.planet.population}</p>
          <p>Terrain : {this.state.planet.terrain}</p>
        </div>
      </div>
    );
  }
}
export default PlanetsList;
