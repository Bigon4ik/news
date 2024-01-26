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
import {useFetch} from "../../helpers/hooks/useFetch";
import {useFilters} from "../../helpers/hooks/useFilters";

const Main = () => {
    //const [news,setNews] = useState([])
    // const [categories,setCategories] = useState([])
    //const [selectedCategory,setSelectedCategory] = useState("ALL")
    //const [isLoading,setIsLoading] = useState(true)
    //const [currentPage,setCurrentPage] = useState(1)
    //const [keywords,setKeywords] = useState('')
    // const [filters,setFilters] = useState({
    //     page_number:1,
    //     page_size:PAGE_SIZE,
    //     category:null,
    //     keywords:"",
    // })
    // const changeFilter = (key,value) =>{
    //     setFilters(prev =>{
    //         return{...prev,[key]:value}
    //     })
    // }
    const {filters,changeFilter} = useFilters({
        page_number:1,
        page_size:PAGE_SIZE,
        category:null,
        keywords:"",
    })

    const debouncedKeywords = useDebounce(filters.keywords,1500)

    const {data,isLoading} = useFetch(getNews,{
      ...filters,
        keywords:debouncedKeywords,
    })
    const {data:dataCategories} = useFetch(getCategories)


        // const fetchNews = async (currentPage) => {
    //     try {
    //         setIsLoading(true);
    //         const response = await getNews({
    //             page_number:currentPage,
    //             page_size:PAGE_SIZE,
    //             category:selectedCategory==="All" ? null : selectedCategory,
    //             keywords:debouncedKeywords,
    //
    //         })
    //         setNews(response.news)
    //         setIsLoading(false);
    //     }catch (error){
    //         console.log(error)
    //     }
    // }

    // const fetchCategories = async () => {
    //     try {
    //         const response = await getCategories()
    //         setCategories(["ALL", ...response.categories]);
    //     }catch (error){
    //         console.log(error)
    //     }
    // }


    // useEffect(()=>{
    //     fetchCategories()
    // },[])
    //
    // useEffect(()=>{
    //
    //     fetchNews(currentPage)
    // },[currentPage,selectedCategory,debouncedKeywords])


    const handlerNextPage = () => {
        if (filters.page_number < TOTAL_PAGES){
            changeFilter('page_number',filters.page_number + 1)
        }
    }
    const handlerPreviousPage = () => {
        if (filters.page_number > 1){
            changeFilter('page_number',filters.page_number - 1)
        }
    }
    const handlerPageClick = (pageNumber) => {
        changeFilter('page_number',pageNumber)
    }

    return<main className={styles.main}>
        {dataCategories ?
            <Categories categories={dataCategories.categories}
                     selectedCategory={filters.category}
                     setSelectedCategory={(category) => changeFilter('category',category)
                     }/> : null}

        <Search keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords',keywords)}/>

        <Banner isLoading={isLoading}
                item={data && data.news && data.news[0]}/>

        {/*{news.length > 0 && !isLoading*/}
        {/*    ? (<Banner item={news[0]}/>)*/}
        {/*: (<Skeleton type={"banner"} count={1}/>)*/}
        {/*}*/}

        <Pogination handlerNextPage={handlerNextPage}
                    handlerPreviousPage={handlerPreviousPage}
                    handlerPageClick={handlerPageClick}
                    currentPage={filters.page_number}
                    totalPages={TOTAL_PAGES}
        />

        <NewsList isLoading={isLoading} news={data?.news}/>
        {/*{!isLoading ? <NewsList news={news}/>*/}
        {/*: (<Skeleton type={"item"} count={10}/>)*/}
        {/*}*/}
        <Pogination handlerNextPage={handlerNextPage}
                    handlerPreviousPage={handlerPreviousPage}
                    handlerPageClick={handlerPageClick}
                    currentPage={filters.page_number}
                    totalPages={TOTAL_PAGES}
        />
    </main>
        ;
}

export default Main;
