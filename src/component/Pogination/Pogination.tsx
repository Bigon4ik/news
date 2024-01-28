import React from 'react';
import styles from '../Pogination/pogination.module.css'
import {IPaginationProps} from '../../interfaces';
import {useTheme} from '../../context/ThemeContext';

export const Pogination = ({
                               totalPages,
                               handleNextPage,
                               handlePreviousPage,
                               handlePageClick,
                               currentPage}:IPaginationProps) => {

    const {isDark} = useTheme();

    return (
        <div className={`${styles.pogination} ${isDark ? styles.dark : styles.light}`}>
            <button
                disabled={currentPage<=1}
                onClick={handlePreviousPage}
                className={styles.arrow}>{"<"}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_,index)=>{
                    return <button
                        disabled={index + 1 === currentPage}
                        onClick={()=>handlePageClick(index+1)}
                        className={styles.pageNumber} key={index}>{index + 1}</button>
                })}
            </div>
            <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                className={styles.arrow}>{">"}</button>

        </div>
    )

    ;
}

export default Pogination;
