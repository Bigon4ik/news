import React, {useEffect, useState} from 'react';
import styles from '../Main/main.module.css'
import Banner from '../../component/Banner/Banner';
import {getNews} from '../../Api/apiNews';
import NewsList from '../../component/NewsList/NewsList';
import Skeleton from "../../component/Skeleton/Skeleton";
import Pogination from "../../component/Pogination/Pogination";

const Main = () => {
    const [news,setNews] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [currentPage,setCurrentPage] = useState(1)
    const totalPages = 10
    const pageSize = 10

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews(currentPage,pageSize)
            setNews(response.news)
            setIsLoading(false);
        }catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{

        fetchNews(currentPage)
    },[currentPage])


    const handlerNextPage = () => {
        if (currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }
    const handlerPreviousPage = () => {
        if (currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }
    const handlerPageClick = (pageNumber) => {
            setCurrentPage(pageNumber)
    }

    return<main className={styles.main}>
        {news.length > 0 && !isLoading
            ? (<Banner item={news[0]}/>)
        : (<Skeleton type={"banner"} count={1}/>)
        }
        <Pogination handlerNextPage={handlerNextPage}
                    handlerPreviousPage={handlerPreviousPage}
                    handlerPageClick={handlerPageClick}
                    currentPage={currentPage}
                    totalPages={totalPages}
        />

        {!isLoading ? <NewsList news={news}/>
        : (<Skeleton type={"item"} count={10}/>)
        }
        <Pogination handlerNextPage={handlerNextPage}
                    handlerPreviousPage={handlerPreviousPage}
                    handlerPageClick={handlerPageClick}
                    currentPage={currentPage}
                    totalPages={totalPages}
        />
    </main>
        ;
}

export default Main;
