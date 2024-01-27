import React from 'react';
import Pogination from "../Pogination/Pogination";

export const PoginationWrapper = ({top,bottom,children,...poginationProps}) => {
    return(
        <>
            {top && <Pogination {...poginationProps}/>}
            {children}
            {bottom && <Pogination {...poginationProps}/>}
        </>
    );

};
export default PoginationWrapper;
