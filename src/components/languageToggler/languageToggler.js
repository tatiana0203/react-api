import { useContext } from "react";

import { LanguageContext } from "../languageContext";

import "./languageToggler.css"
import ua from "./ua.png"
import eng from "./eng.png"

const LanguageToggler = () => {

    const { isEngLang, toggleLanguage } = useContext(LanguageContext);

    return (
      <div className="language-toggler" onClick={toggleLanguage}>
        {isEngLang ? <img src={ua} alt="ua"/> : <img src={eng} alt="eng"/>}
      </div>
    );
  };
  
export default LanguageToggler;