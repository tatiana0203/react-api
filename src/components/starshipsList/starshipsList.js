import { useState } from "react";

const StarshipsList = (props) => {
  
  const [starship,setStarship] = useState({
    name: "",
    model: "",
    manufacturer: "",
  });
  const [card,setCard] = useState(false);

  const showStarship = (name, model, manufacturer) => {
    setStarship({
        name: name,
        model: model,
        manufacturer: manufacturer,
      });
    setCard(true)
  };


  return (
      <div className="content-block">
        <ul className="list">
          {props.starships.map((starship) => {
            return (
                <li className="list-item" key={starship.name}
                  onClick={() => {
                    showStarship(
                        starship.name,
                        starship.model,
                        starship.manufacturer
                    );
                  }}
                >
                  {starship.name}
                </li>
            );
          })}
        </ul>

        <div className={card ? "card-visible" : "card-unvisible"}>
          <h3>{starship.name}</h3>
          <p>Model : {starship.model}</p>
          <p>Manufacturer : {starship.manufacturer}</p>
        </div>
      </div>
    );
}

export default StarshipsList;