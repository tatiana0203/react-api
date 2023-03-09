import { createContext, useState } from 'react';

export const LanguageContext = createContext(true);

export const LanguageProvider = ({ children }) => {
  const [isEngLang, setIsEngLang] = useState(true);

  const toggleLanguage = () => {
    setIsEngLang(!isEngLang);
  };

  return (
    <LanguageContext.Provider value={{ isEngLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};