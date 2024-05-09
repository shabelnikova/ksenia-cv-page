import React from 'react';
import styles from './projects.module.css';
import stellar1 from '../../images/stellar1.jpg';
import stellar2 from '../../images/stellar2.jpg';
import shop from '../../images/3legance.jpg';
import mysite from '../../images/mysite.jpg'
import {useTranslation} from "react-i18next";
import {promoProject, shopProject, stellarProject, tennisProject} from "../../utils/common";

const Projects = () => {
    const {t} = useTranslation();
    return (
        <section className={styles.projects_wrapper}>
            <h2 className={styles.projects_header}>{t('projects')}</h2>
            <div className={styles.projects_container}>
                <div className={styles.project_container}>
                    <h3 className={styles.project_heading}>{stellarProject.header}</h3>
                    <img className={styles.projects_image} src={stellar1} alt="project stellar burger"/>
                    <p className={styles.projects_description}>{t('project_stellar_description')}</p>
                    <div className={styles.links_wrapper}>
                        <a className={styles.projects_link} href="https://react-stellar-burger-ashy.vercel.app/" target={"_blank"}>{t('link')}</a>
                        <a className={styles.projects_link} href="https://github.com/shabelnikova/react-stellar-burger" target={"_blank"}>{t('link_github')}</a>
                    </div>

                    <div className={styles.project_tools_container}>
                        {stellarProject.tools.map((el, ind) => {
                            return <div key={ind} className={styles.project_tool}>{el}</div>
                        })}
                    </div>
                </div>
                <div className={styles.project_container}>
                    <h3 className={styles.project_heading}>{tennisProject.header}</h3>
                    <img className={styles.projects_image} src={stellar2} alt="project tennis"/>
                    <p className={styles.projects_description}>{t('project_tennis_description')}</p>
                   <div className={styles.links_wrapper}>
                       <a className={styles.projects_link} href="https://react-tennis.vercel.app/" target={"_blank"}>{t('link')}</a>
                       <a className={styles.projects_link} href="https://github.com/shabelnikova/react-tennis" target={"_blank"}>{t('link_github')}</a>
                   </div>
                    <div className={styles.project_tools_container}>
                        {tennisProject.tools.map((el, ind) => {
                            return <div key={ind} className={styles.project_tool}>{el}</div>
                        })}
                    </div>
                </div>
                <div className={styles.project_container}>
                    <h3 className={styles.project_heading}>{shopProject.header}</h3>
                    <img className={styles.projects_image} src={shop} alt="project shop"/>
                    <p className={styles.projects_description}>{t('project_shop_description')}</p>
                    <div className={styles.links_wrapper}>
                        <a className={styles.projects_link} href="https://legant-ecommerce.onrender.com/cart" target={"_blank"}>{t('link')}</a>
                        <a className={styles.projects_link} href="https://github.com/shabelnikova/project_furniture_ecommerce" target={"_blank"}>{t('link_github')}</a>
                    </div>

                    <div className={styles.project_tools_container}>
                        {shopProject.tools.map((el, ind) => {
                            return <div key={ind} className={styles.project_tool}>{el}</div>
                        })}
                    </div>
                </div>
                <div className={styles.project_container}>
                    <h3 className={styles.project_heading}>{promoProject.header}</h3>
                    <img className={styles.projects_image} src={mysite} alt="project shop"/>
                    <p className={styles.projects_description}>{t('project_site_description')}</p>
                    <a className={styles.projects_link} href="https://github.com/shabelnikova/ksenia-cv-page" target={"_blank"}>{t('link_github')}</a>
                    <div className={styles.project_tools_container}>
                        {promoProject.tools.map((el, ind) => {
                            return <div key={ind} className={styles.project_tool}>{el}</div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;