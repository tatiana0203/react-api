import { useContext } from "react";

import ThemeToggler from "../themeToggler/themeToggler";
import LanguageToggler from "../languageToggler/languageToggler";
import { LanguageContext } from "../languageContext";

import "./header.css"


const Header = (props) => {

    const { isEngLang } = useContext(LanguageContext);

    return ( 
        <div className="buttons-menu">
          <button onClick={() => props.onClick("people")}>{isEngLang ? "People" : "Люди"}</button>
          <button onClick={() => props.onClick("planets")}>{isEngLang ? "Planets" : "Планети"}</button>
          <button onClick={() => props.onClick("starships")}>{isEngLang ? "Starships" : "Космічні кораблі"}</button>

          <ThemeToggler/>
          <LanguageToggler/>
        </div>
    )
}

export default Header;