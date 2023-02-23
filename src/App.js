import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      page: 1,
      person: {
        name: "",
        gender: "",
        birth_year: "",
      },
    };
  }

  requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  setPeople = (result) => {
    this.setState({
      people: result.results,
    });
    console.log(this.state.people);
  };

  setPerson=(name,gender,birth_year)=>{
    this.setState({
      person:{
        name:name,
        gender:gender,
        birth_year:birth_year
      }
    })
  }

  myRequest = (page) =>
    fetch(`https://swapi.dev/api/people/?page=${page}`, this.requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setPeople(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));

  componentDidMount() {
    this.myRequest(this.state.page);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.componentDidMount}>People</button>
        </div>

        <div className="list">
          {this.state.people.map((person) => {
            return (
              <ul key={person.name}>
                <button onClick={()=>{this.setPerson(person.name,person.gender,person.birth_year)}}>{person.name}</button>
              </ul>
            );
          })}
        </div>

        <div className="card"></div>
        <h2>{this.state.person.name}</h2>
        <h2>{this.state.person.birth_year}</h2>
        <h2>{this.state.person.gender}</h2>
      </div>
    );
  }
}

export default App;
