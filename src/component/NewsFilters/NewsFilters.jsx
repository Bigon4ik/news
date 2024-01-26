import React from 'react';
import styles from '../NewsFilters/newsFilters.module.css'
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import {useFetch} from "../../helpers/hooks/useFetch";
import {getCategories} from "../../Api/apiNews";

export const NewsFilters = ({filters,changeFilter}) => {

    const {data:dataCategories} = useFetch(getCategories)

    return<div className={styles.filters}>
        {dataCategories ?
            <Categories categories={dataCategories.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) => changeFilter('category',category)
                        }/> : null}

        <Search keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords',keywords)}/>

        </div>
    ;
}

export default NewsFilters;
