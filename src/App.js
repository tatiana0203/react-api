import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";

import PeopleList from "./components/peopleList/peopleList";
import PlanetsList from "./components/planetsList/planetsList";
import StarshipsList from "./components/starshipsList/starshipsList";

import "./App.css";

const  App = () => {

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [currentList,setCurrentList]=useState("");
  const [list,setList] = useState([]);
  const [loading,setLoading]=useState(false);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const myRequest = (resource) => {
    setLoading(true)
    fetch(`https://swapi.dev/api/${resource}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCurrentList(resource)
        setList(result.results)
        setLoading(false)
      })
      .catch((error) => console.log("error", error));
  };

  const showList = (resource) => {
    switch (resource) {
      case "people":
        return <PeopleList people={list} />;
      case "planets":
        return <PlanetsList planets={list} />;
      case "starships":
        return <StarshipsList starships={list} />;
      default:
        return null;
    }
  };

  
    return (
      <div className="main-content">
      
        <div className="buttons-menu">
          <button onClick={() => myRequest("people")}>People</button>
          <button onClick={() => myRequest("planets")}>Planets</button>
          <button onClick={() => myRequest("starships")}>Starships</button>
        </div>

        { loading ? <DotLoader 
          className="sweet-loading"
          color="white"
          loading={loading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> : showList(currentList)}

      </div>
    );
}

export default App;
