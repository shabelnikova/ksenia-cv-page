import React, {useRef, useState} from 'react';
import styles from './header.module.css';
import {useAppDispatch, useAppSelector} from "../../redux_configuration/hooks";
import {useTranslation} from "react-i18next";
import {languages} from "../../utils/common";
import {changeCurrentLanguage} from "../../redux/languageSlice";
import {IconContext} from "react-icons";
import {BsTelephone} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";
import {LuFileDown} from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import useCloseByEscape from "../../utils/useCloseByEscape";
import useCloseOnClickOutside from "../../utils/useCloseOnClickOutside";

const HeaderNew = () => {
    const dispatch = useAppDispatch();
    const {language} = useAppSelector(state => state.language);

    const [lang, setLang] = useState(language === 'En' ? 'He' : 'En')
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
    return (
        <header className={styles.header_container}>
            <div className={styles.header_name_block}>
                <h1 className={styles.header_name}>{t('name')}</h1>
                <p className={styles.header_job_title}>Front End / FullStack Developer</p>
            </div>
           <div className={styles.buttons_container}>
               <button ref={menuButtonRef} onClick={toggleMenu} type={'button'} className={styles.contact_button}>{t("contacts")}</button>
               {isActive && (
                   <ul
                       className={styles.contacts_container}
                       ref={contactsRef}>
                       <li className={styles.header_telephone_container}>
                           <IconContext.Provider value={{color: "black", size: '1.2rem'}}>
                               <BsTelephone/>
                           </IconContext.Provider>
                           <a className={styles.header_telephone} href="tel:+972537208033">053-720-80-33</a>
                       </li>
                       <li className={styles.header_email_container}>
                           <IconContext.Provider value={{color: "black", size: '1.2rem'}}>
                               <MdAlternateEmail/>
                           </IconContext.Provider>
                           <a className={styles.header_email} href="mailto:ksenia.shabelnikov@gmail.com">ksenia.shabelnikov@gmail.com</a>
                       </li>
                       <li className={styles.header_linkedin_container}>
                           <IconContext.Provider value={{color: "black", size: '1.2rem'}}>
                               <FaLinkedin/>
                           </IconContext.Provider>
                           <a className={styles.header_linkedin} href="https://www.linkedin.com/in/ksenia-shabelnikov/" target={"_blank"}>{t("linkedin")}</a>
                       </li>
                       <li className={styles.header_cv_container}>
                           <IconContext.Provider value={{color: "black", size: '1.2rem'}}>
                               <LuFileDown/>
                           </IconContext.Provider>
                           <a className={styles.header_cv} href={"CV_Ksenia_Shabelnikov.pdf"} download={"CV_Ksenia_Shabelnikov.pdf"}>{t("cv")}</a>
                       </li>
                   </ul>
               )}
               <button onClick={() => toggleLanguage(lang)} className={styles.lang_button}>{lang}</button>
           </div>
        </header>
    );
};

export default HeaderNew;