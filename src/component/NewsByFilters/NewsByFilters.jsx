import React from 'react';
import styles from '../NewsByFilters/newsByFilters.module.css'
import Pogination from "../Pogination/Pogination";
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants";
import NewsList from "../NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";
import {useFilters} from "../../helpers/hooks/useFilters";
import {useDebounce} from "../../helpers/hooks/useDebounce";
import {useFetch} from "../../helpers/hooks/useFetch";
import {getNews} from "../../Api/apiNews";

export const NewsByFilters = () => {

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

    return<section className={styles.section}>
        <NewsFilters
            filters={filters}
            changeFilter={changeFilter}
        />

        <Pogination handlerNextPage={handlerNextPage}
                    handlerPreviousPage={handlerPreviousPage}
                    handlerPageClick={handlerPageClick}
                    currentPage={filters.page_number}
                    totalPages={TOTAL_PAGES}
        />

        <NewsList isLoading={isLoading} news={data?.news}/>

        <Pogination handlerNextPage={handlerNextPage}
                    handlerPreviousPage={handlerPreviousPage}
                    handlerPageClick={handlerPageClick}
                    currentPage={filters.page_number}
                    totalPages={TOTAL_PAGES}
        />

        </section>
    ;
}

export default NewsByFilters;
