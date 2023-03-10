import { useContext } from "react";

import { Link } from 'react-router-dom';

import LanguageToggler from "../../components/languageToggler/languageToggler";
import { LanguageContext } from "../../components/languageContext"

import "./LogIn.css";

const LogIn = (props) => { 
    
    const { isEngLang } = useContext(LanguageContext);
    
    return (
        <div className="login-page">
            <LanguageToggler/>
            <div className="form">
                <form className="login-form">
                <label className="checkbox style-h">
                    <input type="checkbox" onClick={props.onClick}/>
                    <div className="checkbox__checkmark"></div>
                    <div className="checkbox__body">
                    {props.isLogged ? 
                    (isEngLang ? "Click the button below to enter!" : "Натисни кнопку нижче для входу!") :
                    (isEngLang ? "Click to log in!" : "Натисни на мене!")}
                    </div>
                </label>
                <Link to="/main"><button disabled={!props.isLogged }>{isEngLang ? "Log In" : "Ввійти"}</button></Link>
                <p className="message"></p>
                </form>
            </div>
        </div>
        
    );
    
};

export default LogIn;
