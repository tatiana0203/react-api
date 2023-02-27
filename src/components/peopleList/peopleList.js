import React, { Component } from "react";

class PeopleList extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "",
        gender: "",
        birth_year: "",
      },
      cardVisible:false
    };
  }

  setPerson = (name, gender, birth_year) => {
    this.setState({
      person: {
        name: name,
        gender: gender,
        birth_year: birth_year,
      },
      cardVisible:true
    });
    console.log(this.state)
  };

  render() {
    return (
      <div className="content-block">
        <div className="list">
           {this.props.people.map((person) => {
            return (
                <button className="list-item" key={person.name}
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
            );
          })}
          
        </div>

          
        <div className={this.state.cardVisible ? "card-visible" : "card-unvisible"}>
        <div>
          <h3>{this.state.person.name}</h3>
          <p>Birth year : {this.state.person.birth_year}</p>
          <p>Gender : {this.state.person.gender}</p>
        </div>
         
        </div>

        
      </div>
    );
  }
}
export default PeopleList;
