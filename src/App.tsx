import React, {useEffect} from 'react';
import styles from './app.module.css';
import {getLangFromStorage, setLangInStorage} from "./utils/common";
import {useAppSelector} from "./redux_configuration/hooks";
import i18n from "i18next";
import Header from "./components/header/header";
import About_me from "./components/about_me/about_me";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Recommendations from "./components/recommendations/recommendations";

function App() {
    const currentLanguage = getLangFromStorage();
    if(!currentLanguage)
        setLangInStorage('English');
    const {language} = useAppSelector(state => state.language);
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language]);
  return (
    <main className={`${styles.wrapper} ${language === 'Hebrew' ? styles.hebrew : ''}`} >
        <header className={styles.app_container }>
            <Header/>
        </header>
        <About_me/>
        <Projects/>
        <Skills/>
        <Recommendations/>
        <Footer/>
    </main>
  );
}
export default App;
