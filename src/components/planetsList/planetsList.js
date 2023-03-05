import { useState } from "react";

const PlanetsList = (props) => {
 
  const [planet,setPlanet] = useState({
    name: "",
    population: "",
    terrain: "",
  });
  const [card,setCard] = useState(false)

  const showPlanet = (name, population, terrain) => {
    setPlanet({
        name: name,
        population: population,
        terrain: terrain,
      });
    
    setCard(true)
  };


  return (
      <div className="content-block">
        <ul className="list">
          {props.planets.map((planet) => {
            return (
                <li className="list-item" key={planet.name}
                  onClick={() => {
                    showPlanet(
                      planet.name,
                      planet.population,
                      planet.terrain
                    );
                  }}
                >
                  {planet.name}
                </li>
            );
          })}
        </ul>

        <div className={card ? "card-visible" : "card-unvisible"}>
          <h3>{planet.name}</h3>
          <p>Population : {planet.population}</p>
          <p>Terrain : {planet.terrain}</p>
        </div>
      </div>
    );
}

export default PlanetsList;
