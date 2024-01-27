import React from 'react';
import styles from '../Search/search.module.css'

interface Props{
    keywords:string;
    setKeywords:(keywords : string) => void
}

export const Search = ({keywords,setKeywords}:Props) => {
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
