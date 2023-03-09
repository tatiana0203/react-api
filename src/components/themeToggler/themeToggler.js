import { useContext } from "react";

import { ThemeContext } from "../themeContext";

import "./themeToggler.css"

const ThemeToggler = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="theme-toggler"> 
            <input onClick={toggleTheme} type="checkbox" class="checkbox" id="checkbox"/>
            <label for="checkbox" class="checkbox-label">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <span class="ball"></span>
            </label>
        </div>
    );
  };
  
export default ThemeToggler;