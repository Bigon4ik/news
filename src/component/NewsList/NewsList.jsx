import React from 'react';
import styles from '../NewsList/newsList.module.css'
import NewsItem from '../NewsItem/NewsItem';

// @ts-ignore
const NewsList = ({news}) => {
    return(
    <ul className={styles.list}>
        {news.map((item) =>{
            return <NewsItem key={item.id}
                             item={item}/>
        })}
    </ul>
    );
}

export default NewsList;
