import React from 'react';
import styles from './skills.module.css';
import {IconContext} from "react-icons";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {skills} from "../../utils/common";


const Skills = () => {
    const {t, i18n} = useTranslation();
    return (
        <section className={styles.skills_wrapper}>
            <h2 className={styles.skills_header}>{t("skills")}</h2>
            <div className={styles.skills_container}>
                {skills.map((el, index) => {
                    return (
                        <figure className={styles.skill_item} key={index}>
                            <figcaption>{el.name}</figcaption>
                            <div className={styles.icon_wrapper}>
                                <IconContext.Provider value={{color: `${el.color}`, size: '100%'}}>
                                    <el.icon/>
                                </IconContext.Provider>
                            </div>
                        </figure>
                    )
                })}
            </div>
        </section>

    );
};

export default Skills;