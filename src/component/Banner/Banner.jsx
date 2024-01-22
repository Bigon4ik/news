import React from 'react';
import Image from '../Image/Image';
import styles from '../Banner/banner.module.css'
import {formatTimeAgo} from '../../helpers/formatTimeAgo';

// @ts-ignore
const Banner = ({item}) => {
    return<div className={styles.banner}>
        <Image image={item?.image}/>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    ;
}

export default Banner;
