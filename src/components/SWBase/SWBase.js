import { useState, useContext } from "react";
import DotLoader from "react-spinners/DotLoader";

import Header from "../header/header";
import PeopleList from "../peopleList/peopleList";
import PlanetsList from "../planetsList/planetsList";
import StarshipsList from "../starshipsList/starshipsList";
import { ThemeContext } from "../themeContext";

const SWBase = () => {

  const { isDarkTheme } = useContext(ThemeContext);
  console.log(isDarkTheme)

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [currentList, setCurrentList] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const myRequest = (resource) => {
    setLoading(true);
    fetch(`https://swapi.dev/api/${resource}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCurrentList(resource);
        setList(result.results);
        setLoading(false);
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
      <div className={isDarkTheme ? "dark" : "light"} >
        <Header onClick={myRequest} />
        {loading ? (
          <DotLoader
            className="sweet-loading"
            color="white"
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          showList(currentList)
        )}

      </div>
  );
}

export default SWBase;