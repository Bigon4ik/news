import React from 'react';
import styles from '../LatestNews/latestNews.module.css'
import BannerList from "../BannerList/BannerList";

export const LatestNews = ({banners,isLoading}) => {
    return(
        <section className={styles.section}>
            <BannerList banners={banners} isLoading={isLoading}/>

        </section>
    )
    ;
}

export default LatestNews;
