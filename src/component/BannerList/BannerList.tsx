import React from 'react';
import styles from '../BannerList/bannerList.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton";
import Banner from "../Banner/Banner";
import {INews} from '../../interfaces';

interface Props{
    banners?:INews[] | null
}
const BannerList = ({banners}:Props) => {
    return<ul className={styles.banners}>
        {banners?.map(banner => {
            return (
                <Banner key={banner.id} item={banner}/>
            )
        })}
        </ul>
    ;
}

const BannerListWithSkeleton = withSkeleton<Props>(BannerList,'banner',10,'row')

export default BannerListWithSkeleton;
