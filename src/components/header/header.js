import { useContext } from "react";

import { Link } from "react-router-dom";

import ThemeToggler from "../themeToggler/themeToggler";
import LanguageToggler from "../languageToggler/languageToggler";
import { LanguageContext } from "../languageContext";

import "./header.css";

const Header = (props) => {
  const { isEngLang } = useContext(LanguageContext);

  return (
    <div className="buttons-menu">

      <Link to="people"  onClick={() => props.onClick("people")} >
        {isEngLang ? "People" : "Люди"}
      </Link>
      <Link to="planets" onClick={() => props.onClick("planets")}>
        {isEngLang ? "Planets" : "Планети"}
      </Link>
      <Link to="starships" onClick={() => props.onClick("starships")}>
        {isEngLang ? "Starships" : "Космічні кораблі"}
      </Link>

      <ThemeToggler />

      <LanguageToggler />

    </div>
  );
};

export default Header;
