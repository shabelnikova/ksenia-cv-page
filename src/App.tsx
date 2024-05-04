import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import {getLangFromStorage, setLangInStorage} from "./utils/common";
import {useAppSelector} from "./redux_configuration/hooks";
import i18n from "i18next";
import Header from "./components/header/header";

function App() {
    const currentLanguage = getLangFromStorage();
    if(!currentLanguage)
        setLangInStorage('En');
    const {language} = useAppSelector(state => state.language);
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language]);
  return (
    <div className={`${styles.app_container} ${language === 'He' ? styles.hebrew : ''}` }>
      <Header/>
    </div>
  );
}
export default App;
