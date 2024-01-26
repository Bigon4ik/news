import React, {useEffect, useState} from 'react';
import styles from '../Main/main.module.css'
import Banner from '../../component/Banner/Banner';
import {getCategories, getNews} from '../../Api/apiNews';
import NewsList from '../../component/NewsList/NewsList';
import Skeleton from "../../component/Skeleton/Skeleton";
import Pogination from "../../component/Pogination/Pogination";
import Categories from "../../component/Categories/Categories";
import Search from "../../component/Search/Search";
import {useDebounce} from "../../helpers/hooks/useDebounce";
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants";

const Main = () => {
    const [news,setNews] = useState([])
    const [categories,setCategories] = useState([])
    const [selectedCategory,setSelectedCategory] = useState("ALL")
    const [isLoading,setIsLoading] = useState(true)
    const [currentPage,setCurrentPage] = useState(1)
    const [keywords,setKeywords] = useState('')

    const debouncedKeywords = useDebounce(keywords,1500)

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews({
                page_number:currentPage,
                page_size:PAGE_SIZE,
                category:selectedCategory==="All" ? null : selectedCategory,
                keywords:debouncedKeywords,

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
    },[currentPage,selectedCategory,debouncedKeywords])


    const handlerNextPage = () => {
        if (currentPage < TOTAL_PAGES){
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

        <Banner isLoading={isLoading} item={news.length > 0 && news[0]}/>

        {/*{news.length > 0 && !isLoading*/}
        {/*    ? (<Banner item={news[0]}/>)*/}
        {/*: (<Skeleton type={"banner"} count={1}/>)*/}
        {/*}*/}

        <Pogination handlerNextPage={handlerNextPage}
                    handlerPreviousPage={handlerPreviousPage}
                    handlerPageClick={handlerPageClick}
                    currentPage={currentPage}
                    totalPages={TOTAL_PAGES}
        />

        <NewsList isLoading={isLoading} news={news}/>
        {/*{!isLoading ? <NewsList news={news}/>*/}
        {/*: (<Skeleton type={"item"} count={10}/>)*/}
        {/*}*/}
        <Pogination handlerNextPage={handlerNextPage}
                    handlerPreviousPage={handlerPreviousPage}
                    handlerPageClick={handlerPageClick}
                    currentPage={currentPage}
                    totalPages={TOTAL_PAGES}
        />
    </main>
        ;
}

export default Main;
