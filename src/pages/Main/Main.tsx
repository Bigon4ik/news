import React from 'react';
import styles from '../Main/main.module.css'
import LatestNews from "../../component/LatestNews/LatestNews";
import NewsByFilters from "../../component/NewsByFilters/NewsByFilters";

interface Props{
    isDark:boolean
}
const Main = ({isDark}:Props) => {


    return<main className={styles.main}>
        <LatestNews/>

        <NewsByFilters isDark={isDark}/>
    </main>
        ;
}

export default Main;
