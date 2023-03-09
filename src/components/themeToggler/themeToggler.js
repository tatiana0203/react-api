import { useContext } from "react";

import { ThemeContext } from "../themeContext";

const ThemeToggler = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    return (
      <button onClick={toggleTheme}>
        {isDarkTheme ? 'Switch Light Theme' : 'Switch Dark Theme'}
      </button>
    );
  };
  
export default ThemeToggler;