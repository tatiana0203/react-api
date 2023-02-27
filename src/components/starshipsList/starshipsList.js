import React, { Component } from "react";


class StarshipsList extends Component {
  constructor() {
    super();
    this.state = {
      starship: {
        name: "",
        model: "",
        manufacturer: "",
      },
      cardVisible:false
    };
  }

  setStarship = (name, model, manufacturer) => {
    this.setState({
      starship: {
        name: name,
        model: model,
        manufacturer: manufacturer,
      },
      cardVisible:true
    });
  };

  render() {
    return (
      <div className="content-block">
        <div className="list">
          {this.props.starships.map((starship) => {
            return (
                <button className="list-item" key={starship.name}
                  onClick={() => {
                    this.setStarship(
                        starship.name,
                        starship.model,
                        starship.manufacturer
                    );
                  }}
                >
                  {starship.name}
                </button>
            );
          })}
        </div>

        <div className={this.state.cardVisible ? "card-visible" : "card-unvisible"}>
          <h3>{this.state.starship.name}</h3>
          <p>Model : {this.state.starship.model}</p>
          <p>Manufacturer : {this.state.starship.manufacturer}</p>
        </div>
      </div>
    );
  }
}
export default StarshipsList;