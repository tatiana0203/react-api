import { useContext } from "react";

import { LanguageContext } from "../languageContext";

const LanguageToggler = () => {

    const { isEngLang, toggleLanguage } = useContext(LanguageContext);
    
    return (
      <button onClick={toggleLanguage}>
        {isEngLang ? 'UA' : 'ENG'}
      </button>
    );
  };
  
export default LanguageToggler;