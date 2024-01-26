import React from 'react';
import styles from '../Search/search.module.css'

export const Search = ({keywords,setKeywords}) => {
    return(
        <div className={styles.search}>
            <input type="text"
                   className={styles.input}
                   onChange={(e)=>setKeywords(e.target.value)}
                   value={keywords}
                   placeholder={'Search'}
            />

        </div>
    )
    ;
}

export default Search;
