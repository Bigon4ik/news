import React from 'react';
import styles from '../LatestNews/latestNews.module.css'
import BannerList from "../BannerList/BannerList";

import {useGetLatestNewsQuery} from '../../store/services/newsApi';

export const LatestNews = () => {

    const { data, isLoading } = useGetLatestNewsQuery(null)

    return(
        <section className={styles.section}>
            <BannerList banners={data && data.news} isLoading={isLoading}/>
        </section>
    )
    ;
}

export default LatestNews;
