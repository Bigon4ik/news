import React from 'react';
import styles from '../NewsByFilters/newsByFilters.module.css'
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Pogination from "../Pogination/Pogination";
import {TOTAL_PAGES} from "../../constants/constants";
import NewsList from "../NewsList/NewsList";
import {useFetch} from "../../helpers/hooks/useFetch";
import {getCategories} from "../../Api/apiNews";
import NewsFilters from "../NewsFilters/NewsFilters";

export const NewsByFilters = ({
                                  filters,
                                  changeFilter,
                                  isLoading,
                                  news,
                              }) => {

    // const {data:dataCategories} = useFetch(getCategories)

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

        <NewsList isLoading={isLoading} news={news}/>
        {/*{!isLoading ? <NewsList news={news}/>*/}
        {/*: (<Skeleton type={"item"} count={10}/>)*/}
        {/*}*/}
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
