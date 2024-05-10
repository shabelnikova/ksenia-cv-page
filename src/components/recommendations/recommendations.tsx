import React from 'react';
import styles from './recommendations.module.css'
import {useTranslation} from "react-i18next";
import josef from '../../images/josef.jpg';
import vitaly from '../../images/vitaly.jpg'

const Recommendations = () => {
    const {t} = useTranslation()
    return (
        <section className={styles.recommendations_wrapper}>
            <h2 className={styles.recommendations_header}>{t("testimonial_header")}</h2>
            <div className={styles.recommendations_container}>
                <div className={styles.recommendations_card}>
                    <a href="https://www.linkedin.com/in/vitalii-kravchuk/" target={'_blank'}>
                        <div><img className={styles.recommendations_img} src={vitaly} alt="Vitalii Kravchuk"/></div>
                    </a>
                    <div className={styles.recommendations_description}>
                        <p className={styles.name}>Vitalii Kravchuk</p>
                        <p>Mobile/Frontend Developer &#8212; Android, React, React Native, Flutter</p>
                        <p>{t("testimonial2")}</p>
                    </div>
                </div>
                <div className={styles.recommendations_card}>
                    <a href="https://www.linkedin.com/in/joseph-shainsky/" target={'_blank'}>
                        <div><img className={styles.recommendations_img} src={josef} alt="joseph shainsky"/></div>
                    </a>
                   <div className={styles.recommendations_description}>
                       <p className={styles.name}>Joseph Shainsky</p>
                       <p className={styles.position}>Tech Lead Frontend Developer, Angular Developer</p>
                       <p>{t("testimonial1")}</p>
                   </div>
                </div>

            </div>
        </section>
    );
};

export default Recommendations;