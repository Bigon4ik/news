import React from 'react';
import styles from '../BannerList/bannerList.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton";
import Banner from "../Banner/Banner";

const BannerList = ({banners}) => {
    return<ul className={styles.banners}>
        {banners?.map(banner => {
            return (
                <Banner key={banner.id} item={banner}/>
            )
        })}
        </ul>
    ;
}

const BannerListWithSkeleton = withSkeleton(BannerList,'banner',10,'rowList')

export default BannerListWithSkeleton;
