import React from 'react';
import Image from '../Image/Image';
import styles from '../BannerList/bannerList.module.css'
import {formatTimeAgo} from '../../helpers/formatTimeAgo';
import withSkeleton from "../../helpers/hocs/withSkeleton";
import Banner from "../Banner/Banner";

// @ts-ignore
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
