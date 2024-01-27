import React from 'react';
import styles from '../Slider/slider.module.css'

export const Slider = ({children}) => {
    return<div className={styles.slider}>
        <button className={styles.arrow}>{`<`}</button>
        {children}
        <button className={styles.arrow}>{`>`}</button>

        </div>
    ;
}

export default Slider;
