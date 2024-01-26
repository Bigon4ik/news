import React, {useEffect, useState} from 'react';
import styles from '../Main/main.module.css'
import Banner from '../../component/Banner/Banner';
import {getCategories, getNews} from '../../Api/apiNews';
import NewsList from '../../component/NewsList/NewsList';
import Skeleton from "../../component/Skeleton/Skeleton";
import Pogination from "../../component/Pogination/Pogination";
import Categories from "../../component/Categories/Categories";
import Search from "../../component/Search/Search";

const Main = () => {
    const [news,setNews] = useState([])
    const [categories,setCategories] = useState([])
    const [selectedCategory,setSelectedCategory] = useState("ALL")
    const [isLoading,setIsLoading] = useState(true)
    const [currentPage,setCurrentPage] = useState(1)
    const [keywords,setKeywords] = useState('')

    const totalPages = 10
    const pageSize = 10

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews({
                page_number:currentPage,
                page_size:pageSize,
                category:selectedCategory==="All" ? null : selectedCategory,
                keywords:keywords,

            })
            setNews(response.news)
            setIsLoading(false);
        }catch (error){
            console.log(error)
        }
    }
    const fetchCategories = async () => {
        try {
            const response = await getCategories()
            setCategories(["ALL", ...response.categories]);
        }catch (error){
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchCategories()
    },[])

    useEffect(()=>{

        fetchNews(currentPage)
    },[currentPage,selectedCategory,keywords])


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
        <Categories categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}/>

        <Search keywords={keywords}
                setKeywords={setKeywords}/>

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
