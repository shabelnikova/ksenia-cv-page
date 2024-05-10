import React, {useRef, useState} from 'react';
import styles from './header.module.css';
import {useAppDispatch, useAppSelector} from "../../redux_configuration/hooks";
import {useTranslation} from "react-i18next";
import {languages} from "../../utils/common";
import {changeCurrentLanguage} from "../../redux/languageSlice";
import useCloseByEscape from "../../utils/useCloseByEscape";
import useCloseOnClickOutside from "../../utils/useCloseOnClickOutside";
import FlyMenu from "../fly_menu/fly_menu";

const HeaderNew = () => {
    const dispatch = useAppDispatch();
    const {language} = useAppSelector(state => state.language);

    const [lang, setLang] = useState(language === 'English' ? 'Hebrew' : 'English')
    const {t, i18n} = useTranslation();

    const [isActive, setIsActive] = useState(false);
    const contactsRef = useRef<HTMLUListElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const arrRefs = [contactsRef, menuButtonRef];

    useCloseByEscape(setIsActive);
    useCloseOnClickOutside(isActive, setIsActive, arrRefs);
    const toggleLanguage = (l: string) => {
        l === languages[0] ? setLang(languages[1]) : setLang(languages[0]);
        dispatch(changeCurrentLanguage(l));
        i18n.changeLanguage(l);
    }
    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    }
    const flymenuStyles = () => {
        if(isActive && language === 'English') {
            return `${styles.contacts_container} ${styles.active}`
        }
        else if(isActive && language === 'Hebrew') {
            return `${styles.contacts_container} ${styles.contacts_container_hebrew} ${styles.active}`
        }
        else if(!isActive && language === 'English')
            return `${styles.contacts_container}`
        else
            return `${styles.contacts_container} ${styles.contacts_container_hebrew}`
    }
    return (
        <div className={styles.header_container}>
            <div className={styles.header_name_block}>
                <h1 className={styles.header_name}>{t('name')}</h1>
                <p className={styles.header_job_title}>Front End / FullStack Developer</p>
            </div>
           <div className={styles.buttons_container}>
               <button ref={menuButtonRef} onClick={toggleMenu} type={'button'} className={styles.contact_button}>{t("contacts")}</button>
               <button onClick={() => toggleLanguage(lang)} className={styles.lang_button}>{lang}</button>
           </div>
            <ul className={flymenuStyles()}
                ref={contactsRef}>
                <FlyMenu/>
            </ul>
        </div>
    );
};

export default HeaderNew;