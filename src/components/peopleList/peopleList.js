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
      },
      page:1,
      pageCount:10
    };
  }

  requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  setPeople = (result) => {
    this.setState({
      people: result.results,
      nextPage: result.next,
      prevPage: result.previous
    });
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


  peopleRequest = (number) =>
    fetch(`https://swapi.dev/api/people/?page=${number}`, this.requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setPeople(result);
      })
      .catch((error) => console.log("error", error));

  componentDidMount() {
    this.peopleRequest(this.state.page);
  }

  nextPage = () => {
    if (this.state.page !== this.state.pageCount) {
      this.setState({ page: this.state.page + 1 });
      this.peopleRequest(this.state.page);
    }
  };

  prevPage = () => {
    if (this.state.page !== 1) {
        this.setState({ page: this.state.page - 1 });
        this.peopleRequest(this.state.page);
      }
    };

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

          <button onClick={this.prevPage}> prev</button>
          <button onClick={this.nextPage}>next</button>
          
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
