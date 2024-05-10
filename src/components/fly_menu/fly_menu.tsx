import React from 'react';
import styles from './fly_menu.module.css'
import {IconContext} from "react-icons";
import {BsTelephone} from "react-icons/bs";
import {MdAlternateEmail} from "react-icons/md";
import {FaLinkedin} from "react-icons/fa";
import {LuFileDown} from "react-icons/lu";
import {useTranslation} from "react-i18next";

const FlyMenu = () => {
    const {t} = useTranslation();
    return (
        <>
            <li className={styles.header_telephone_container}>
                <IconContext.Provider value={{color: "white", size: '1.2rem'}}>
                    <BsTelephone/>
                </IconContext.Provider>
                <a className={styles.header_telephone} href="tel:+972537208033">053-720-80-33</a>
            </li>
            <li className={styles.header_email_container}>
                <IconContext.Provider value={{color: "white", size: '1.2rem'}}>
                    <MdAlternateEmail/>
                </IconContext.Provider>
                <a className={styles.header_email} href="mailto:ksenia.shabelnikov@gmail.com">ksenia.shabelnikov@gmail.com</a>
            </li>
            <li className={styles.header_linkedin_container}>
                <IconContext.Provider value={{color: "white", size: '1.2rem'}}>
                    <FaLinkedin/>
                </IconContext.Provider>
                <a className={styles.header_linkedin} href="https://www.linkedin.com/in/ksenia-shabelnikov/" target={"_blank"}>{t("linkedin")}</a>
            </li>
            <li className={styles.header_cv_container}>
                <IconContext.Provider value={{color: "white", size: '1.2rem'}}>
                    <LuFileDown/>
                </IconContext.Provider>
                <a className={styles.header_cv} href={"CV_Ksenia_Shabelnikov_FrontEnd_Fullstack_Developer.pdf"} download={"CV_Ksenia_Shabelnikov_FrontEnd_Fullstack_Developer.pdf"}>{t("cv")}</a>
            </li>
        </>
    );
};

export default FlyMenu;