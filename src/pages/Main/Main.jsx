import React, {useEffect, useState} from 'react';
import styles from '../Main/main.module.css'
import Banner from '../../component/Banner/Banner';
import {getNews} from '../../Api/apiNews';
import NewsList from '../../component/NewsList/NewsList';

const Main = () => {
    const [news,setNews] = useState([])

    useEffect(()=>{
        const fetchNews = async () => {
            try {
                const response = await getNews()
                setNews(response.news)
            }catch (error){
                console.log(error)
            }
        }
        fetchNews()
    })


    return<main className={styles.main}>
        {news.length > 0 ? <Banner item={news[0]}/> : null}
        <NewsList news={news}/>


    </main>
        ;
}

export default Main;
