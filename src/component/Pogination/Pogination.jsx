import React from 'react';
import styles from '../Pogination/pogination.module.css'

export const Pogination = ({totalPages,handlerNextPage,handlerPreviousPage,handlerPageClick,currentPage}) => {
    return (
        <div className={styles.pogination}>
            <button
                disabled={currentPage<=1}
                onClick={handlerPreviousPage}
                className={styles.arrow}>{"<"}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_,index)=>{
                    return <button
                        disabled={index + 1 === currentPage}
                        onClick={()=>handlerPageClick(index+1)}
                        className={styles.pageNumber} key={index}>{index + 1}</button>
                })}
            </div>

            <button
                onClick={handlerNextPage}
                disabled={currentPage >= totalPages}
                className={styles.arrow}>{">"}</button>

        </div>
    )

    ;
}

export default Pogination;
