import React from 'react';
import Pogination from "../Pogination/Pogination";
import {IPaginationProps} from '../../interfaces';

interface Props{
    children:React.ReactNode;
    top?:boolean;
    bottom?:boolean;
}


export const PoginationWrapper = ({top,bottom,children,...poginationProps}:Props & IPaginationProps) => {
    return(
        <>
            {top && <Pogination {...poginationProps}/>}
            {children}
            {bottom && <Pogination {...poginationProps}/>}
        </>
    );

};
export default PoginationWrapper;
