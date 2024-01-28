import React from 'react';
import styles from '../NewsByFilters/newsByFilters.module.css'
import {TOTAL_PAGES} from "../../constants/constants";
import NewsList from "../NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";
import {useDebounce} from "../../helpers/hooks/useDebounce";
import PoginationWrapper from "../PoginationWrapper/PoginationWrapper";
import {useGetNewsQuery} from '../../store/services/newsApi';
import {useAppDispatch, useAppSelector} from '../../store';
import {setFilters} from '../../store/slices/newsSlice';

export const NewsByFilters = () => {

    const dispatch = useAppDispatch()

    const filters = useAppSelector(state =>state.news.filters)
    const news = useAppSelector(state =>state.news.news)

    const debouncedKeywords = useDebounce(filters.keywords,1500)

    const { isLoading } = useGetNewsQuery({...filters,
            keywords:debouncedKeywords,})

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES){
            dispatch(setFilters({key:'page_number',value:filters.page_number + 1}))
        }
    }
    const handlePreviousPage = () => {
        if (filters.page_number > 1){
            dispatch(setFilters({key:'page_number',value:filters.page_number - 1}))
        }
    }
    const handlePageClick = (pageNumber:number) => {
        dispatch(setFilters({key:'page_number',value:pageNumber}))
    }

    return<section className={styles.section}>
        <NewsFilters
            filters={filters} />
        <PoginationWrapper
            top bottom
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage={filters.page_number}
            totalPages={TOTAL_PAGES}>
                <NewsList isLoading={isLoading} news={news}/>
        </PoginationWrapper>

        </section>
    ;
}

export default NewsByFilters;
