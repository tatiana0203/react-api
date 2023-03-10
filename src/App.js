import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SWBase from "./components/SWBase/SWBase";

import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import LogIn from "./pages/login/LogIn";

import { ThemeProvider } from "./components/themeContext";
import { LanguageProvider } from "./components/languageContext";

import "./App.css";


const App = () => {

  const [isLogged,setIsLogged]=useState(false)

  const toggleLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<LogIn isLogged={isLogged} onClick={toggleLogin}/>} />
            {isLogged ? <Route path="/main/*" element={<SWBase isLogged={isLogged}/>}/> : null}
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
