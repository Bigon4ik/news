import React from 'react';
import styles from '../Image/image.module.css'

const Image = ({image}) => {
    return(
    <div className={styles.wrapper}>
        {image ? <img src={image} alt="news" className={styles.image}/> : null}
    </div>
    );
}

export default Image;
