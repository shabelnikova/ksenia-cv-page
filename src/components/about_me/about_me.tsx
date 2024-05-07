import React from 'react';
import styles from './about_me.module.css'
import profile_photo from '../../images/profile_photo2.jpg'
import {useTranslation} from "react-i18next";

const AboutMe = () => {
    const {t, i18n} = useTranslation();
    return (
        <section className={styles.about_wrapper}>
            <article className={styles.about_summary_wrapper}>
                <h2 className={styles.about_heading}>{t("summary")}</h2>
                <p className={styles.about_description}>{t("summary_description")}</p>
            </article>
            <div className={styles.about_container}>
                <div className={styles.img_wrapper}>
                    <img className={styles.profile_photo} src={profile_photo} alt="Ksenia Shabelnikov"/>
                </div>
                <article className={styles.about_description_wrapper}>
                    <h2 className={styles.about_heading}>{t("about_header")}</h2>
                    <p className={styles.about_description}>{t("about1")}</p>
                    <p className={styles.about_description}>{t("about2")}</p>
                    <p className={styles.about_description}>{t("about3")}</p>
                </article>
            </div>
        </section>

    );
};

export default AboutMe;