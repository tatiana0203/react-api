import { useContext } from "react";

import { ThemeContext } from "../themeContext";

import "./themeToggler.css"

const ThemeToggler = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div className="theme-toggler"> 
            <input onClick={toggleTheme} type="checkbox" className="checkbox-theme" id="checkbox"/>
            <label htmlFor="checkbox" className="checkbox-label"> 
                <i className="fas fa-sun"></i>
                <i className="fas fa-moon"></i>
                <span className="ball"></span>
            </label>
        </div>
    );
  };
  
export default ThemeToggler;