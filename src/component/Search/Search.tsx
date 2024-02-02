import React from 'react';
import styles from '../Search/search.module.css'
import {useTheme} from '../../context/ThemeContext';

interface Props{
    keywords:string;
    setKeywords:(keywords : string) => void
}

export const Search = ({keywords,setKeywords}:Props) => {
    const {isDark} = useTheme();

    return(
        <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
            <input type="text"
                   className={styles.input}
                   onChange={(e)=>setKeywords(e.target.value)}
                   value={keywords}
            />

        </div>
    )
    ;
}

export default Search;
