import React from 'react';
import styles from '../Search/search.module.css'

interface Props{
    keywords:string;
    setKeywords:(keywords : string) => void
    isDark:boolean
}

export const Search = ({isDark,keywords,setKeywords}:Props) => {
    return(
        <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
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
