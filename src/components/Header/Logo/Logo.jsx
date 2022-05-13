import React from 'react';
import styles from './Logo.module.css';


const Logo = () => {
    return (
        <a className={styles.link} href="./index.html">
            <span className={styles.span}>Phone</span>
            <span>book</span>
        </a>
    );
};

export default Logo;