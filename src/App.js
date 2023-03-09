import SWBase from "./components/SWBase/SWBase";
import { ThemeProvider } from "./components/themeContext";
import { LanguageProvider } from "./components/languageContext";

import "./App.css"

const App = () => {
  //console.log(isDarkTheme)
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SWBase />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
