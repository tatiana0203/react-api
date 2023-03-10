import { useState, useContext } from "react";
import { Route, Routes, Outlet} from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";


import Header from "../header/header";
import PeopleList from "../peopleList/peopleList";
import PlanetsList from "../planetsList/planetsList";
import StarshipsList from "../starshipsList/starshipsList";
import { ThemeContext } from "../themeContext";

import "./SWBase.css"

const SWBase = () => {

  const override = {
    display: "block",
    margin: "100px auto",
  };
  
  const { isDarkTheme } = useContext(ThemeContext);

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const myRequest = (link) => {
    setLoading(true);
    fetch(`https://swapi.dev/api/${link}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setList(result.results);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  return (
      <div className={isDarkTheme ? " content dark" : "content light"} >

        <Header onClick={myRequest} />

        <Routes>
          <Route path="people" element={<PeopleList people={list}/>}/>
          <Route path="planets" element={<PlanetsList planets={list}/>}/>
          <Route path="starships" element={<StarshipsList starships={list}/>}/>
        </Routes>

        {loading ? (
          <DotLoader
            className="sweet-loading"
            color="#eac37133"
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Outlet />
        )}

      </div>
  );
}

export default SWBase;