import React, { useState } from "react";

const PeopleList = (props) => {

  const [person,setPerson]=useState({
    name: "",
    gender: "",
    birth_year: "",
  });
  const [card,setCard] = useState(false);
  
  const showCard = (name, gender, birth_year) => {
    setPerson( {
      name: name,
      gender: gender, 
      birth_year: birth_year});

    setCard(true)
  };



  return (
      <div className="content-block">
        <ul className="list">
           {props.people.map((person) => {
            return (
                <li className="list-item" key={person.name}
                  onClick={() => {
                    showCard(
                      person.name,
                      person.gender,
                      person.birth_year
                    );
                  }}
                >
                  {person.name}
                </li>
            );
          })}
          
        </ul>

          
        <div className={card ? "card-visible" : "card-unvisible"}>
          <h3>{person.name}</h3>
          <p>Birth year : {person.birth_year}</p>
          <p>Gender : {person.gender}</p>
        </div>

        
      </div>
    );
}

export default PeopleList;
