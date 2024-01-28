import React from 'react';
import styles from '../NewsFilters/newsFilters.module.css'
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import { IFilters} from '../../interfaces';
import {useGetCategoriesQuery} from '../../store/services/newsApi';
import {useAppDispatch} from '../../store';
import {setFilters} from '../../store/slices/newsSlice';



interface Props{
    filters:IFilters;
}

export const NewsFilters = ({filters}:Props) => {
    const dispatch = useAppDispatch()

    const { data } = useGetCategoriesQuery(null)

    return<div className={styles.filters}>

        {data ? (
                <Slider>
                    <Categories categories={data.categories}
                                selectedCategory={filters.category}
                                setSelectedCategory={(category) =>
                                    dispatch(setFilters({key:'category',value:category}))}
                    />
                </Slider>
            ) : null}

        <Search keywords={filters.keywords}
                setKeywords={(keywords) =>
                    dispatch(setFilters({key:'category',value:keywords}))}/>

        </div>
    ;
}

export default NewsFilters;
