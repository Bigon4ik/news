import React from 'react';
import {formatData} from '../../helpers/formatData';
import styles from '../Banner/banner.module.css'

export const Banner = (item:any) => {
    return<div className={styles.banner}>
        <h3 className={styles.title}>{item.title}</h3>

        </div>
    ;
}

export default Banner;
