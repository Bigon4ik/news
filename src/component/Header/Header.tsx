import React, {useContext} from 'react';
import {formatData} from '../../helpers/formatData';
import styles from '../Header/header.module.css'
import {themeIcons} from '../../assest';
import {useTheme} from '../../context/ThemeContext';


export const Header = () => {

    const {isDark, toggleTheme} = useTheme();
    return<header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>

           <div className={styles.info}>
               <h1 className={styles.title}>News</h1>
               <p className={styles.date}>{formatData(new Date())}</p>
           </div>
        <img src={isDark ? themeIcons.light : themeIcons.dark } width={30} alt="theme" onClick={toggleTheme}/>
        </header>
    ;
}

export default Header;
