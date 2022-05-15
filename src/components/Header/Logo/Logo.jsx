import React from 'react';
import IconLogo from './images/telephone.svg';
import styles from './Logo.module.css';


const Logo = () => {
    return (
        <a className={styles.link} href="./index.html">
            <img className={styles.logo} src={IconLogo} alt="Phone" />
            <span className={styles.span}>Phone</span>
            <span>book _</span>
        </a>
    );
};

export default Logo;