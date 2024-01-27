import React from 'react';
import styles from '../Main/main.module.css'
import {getNews} from '../../Api/apiNews';
import {useDebounce} from "../../helpers/hooks/useDebounce";
import {PAGE_SIZE} from "../../constants/constants";
import {useFetch} from "../../helpers/hooks/useFetch";
import {useFilters} from "../../helpers/hooks/useFilters";
import LatestNews from "../../component/LatestNews/LatestNews";
import NewsByFilters from "../../component/NewsByFilters/NewsByFilters";

const Main = () => {


    return<main className={styles.main}>
        <LatestNews/>

        <NewsByFilters/>
    </main>
        ;
}

export default Main;
