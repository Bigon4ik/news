import React from 'react';
import styles from '../Categories/categories.module.css'

export const Categories = ({categories,setSelectedCategory,selectedCategory}) => {
    return(
        <div className={styles.categories}>
            <button
                onClick={()=> setSelectedCategory(null)}
                className={!selectedCategory ? styles.active : styles.item}>All</button>
            {categories.map(category =>{

                return(
                    <button key={category}
                            onClick={()=> setSelectedCategory(category)}
                            className={selectedCategory === category
                                ? styles.active
                                : styles.item}>
                        {category}
                    </button>
                )
            })}

        </div>
    )
    ;
}

export default Categories;
