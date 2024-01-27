import React from 'react';
import styles from '../NewsFilters/newsFilters.module.css'
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import {useFetch} from "../../helpers/hooks/useFetch";
import {getCategories} from "../../Api/apiNews";
import Slider from "../Slider/Slider";
import {CategoriesApiResponse, IFilters} from '../../interfaces';


interface Props{
    filters:IFilters;
    changeFilter:(key:string,value:string |number | null) => void

}

export const NewsFilters = ({filters,changeFilter}:Props) => {

    const {data:dataCategories} = useFetch<CategoriesApiResponse, null>(getCategories)

    return<div className={styles.filters}>

        {dataCategories ? (
                <Slider>
                    <Categories categories={dataCategories.categories}
                                selectedCategory={filters.category}
                                setSelectedCategory={(category) => changeFilter('category',category)}/>
                </Slider>
            ) : null}

        <Search keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords',keywords)}/>

        </div>
    ;
}

export default NewsFilters;
