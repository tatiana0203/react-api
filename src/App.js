import SWBase from "./components/SWBase/SWBase";
import { ThemeProvider } from "./components/themeContext";
import { LanguageProvider } from "./components/languageContext";

import "./App.css"

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <h1>check br 7</h1>
        <SWBase />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
