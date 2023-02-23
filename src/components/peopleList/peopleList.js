import React, { Component } from "react";

import "./peopleList.css"

class PeopleList extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      person: {
        name: "",
        gender: "",
        birth_year: "",
      }
    };
  }

  requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  setPeople = (result) => {
    this.setState({
      people: result.results
    });
    console.log(this.state)
  };

  setPerson = (name, gender, birth_year) => {
    this.setState({
      person: {
        name: name,
        gender: gender,
        birth_year: birth_year,
      },
    });
  };


  peopleRequest = (resource) =>
    fetch(`https://swapi.dev/api/${resource}/?page=2`, this.requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setPeople(result);
      })
      .catch((error) => console.log("error", error));

  componentDidMount() {
    this.peopleRequest(this.props.resource);
  }

  render() {
    return (
      <div className="people-list">
        <div>
          {this.state.people.map((person) => {
            return (
              <ul key={person.name}>
                <button
                  onClick={() => {
                    this.setPerson(
                      person.name,
                      person.gender,
                      person.birth_year
                    );
                  }}
                >
                  {person.name}
                </button>
              </ul>
            );
          })}

          <button onClick={this.changePage}>next</button>
        </div>

        <div className="card">
          <h2>Name : {this.state.person.name}</h2>
          <h2>Birth year : {this.state.person.birth_year}</h2>
          <h2>Gender : {this.state.person.gender}</h2>
        </div>

        
      </div>
    );
  }
}
export default PeopleList;
