import { useContext } from "react";

import { ThemeContext } from "../themeContext";

import "./themeToggler.css"

const ThemeToggler = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div className="theme-toggler"> 
            <input onClick={toggleTheme} type="checkbox" class="checkbox-theme" id="checkbox"/>
            <label for="checkbox" class="checkbox-label"> 
                <i class="fas fa-sun"></i>
                <i class="fas fa-moon"></i>
                <span class="ball"></span>
            </label>
        </div>
    );
  };
  
export default ThemeToggler;