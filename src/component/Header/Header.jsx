import React from 'react';
import {formatData} from '../../helpers/formatData';
import styles from '../Header/header.module.css'

export const Header = () => {
    return<header className={styles.header}>
            <h1 className={styles.title}>News</h1>
        <p className={styles.date}>{formatData(new Date())}</p>
        </header>
    ;
}

export default Header;
