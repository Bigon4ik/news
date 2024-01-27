import React from 'react';
import styles from '../LatestNews/latestNews.module.css'
import BannerList from "../BannerList/BannerList";
import {useFetch} from "../../helpers/hooks/useFetch";
import {getLatesNews} from "../../Api/apiNews";
import { NewsApiResponse} from '../../interfaces';

export const LatestNews = () => {

    const {data,isLoading} = useFetch <NewsApiResponse, null> (getLatesNews)

    return(
        <section className={styles.section}>
            <BannerList banners={data && data.news} isLoading={isLoading}/>
        </section>
    )
    ;
}

export default LatestNews;
