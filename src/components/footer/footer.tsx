import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_line}></div>
            <p className={styles.footer_info}>&copy; Ksenia Shabelnikov 2024</p>
        </footer>
    );
};

export default Footer;