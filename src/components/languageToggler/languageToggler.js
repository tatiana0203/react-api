import { useContext } from "react";

import { LanguageContext } from "../languageContext";

const LanguageToggler = () => {
    const { isEngLang, toggleLanguage } = useContext(LanguageContext);
    return (
      <button onClick={toggleLanguage}>
        {isEngLang ? 'Switch to Ua' : 'Switch to Eng'}
      </button>
    );
  };
  
export default LanguageToggler;