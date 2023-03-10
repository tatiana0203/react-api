import { useContext } from "react";

import { Link } from "react-router-dom";

import LanguageToggler from "../../components/languageToggler/languageToggler";
import { LanguageContext } from "../../components/languageContext"

import "./Home.css";

const Home = () => {

  const { isEngLang } = useContext(LanguageContext);

  return (
    <div className="home-page">
      <LanguageToggler/>
      <div className="home-text">
        <h2>The Star Wars API</h2>
        <p>{isEngLang ? "The Star Wars API, or 'swapi' (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe! We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!" : "API Star Wars, або «swapi» (Swah-pee) — це перше в світі кількісне та програмно доступне джерело даних для всіх даних із канонічного всесвіту Star Wars! Ми взяли весь багатий контекстний матеріал із всесвіту та відформатували його у щось зручніше для використання програмним забезпеченням. Потім ми розмістили API на передній панелі, щоб ви могли отримати доступ до всього!"}
          
        </p>

        <Link to="/login">
          <button className="login-button">
            <span>{isEngLang ? "Log in" : "Ввійти"}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
