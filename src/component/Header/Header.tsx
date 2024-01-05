import React from 'react';
import {formatData} from '../../helpers/formatData';

export const Header = () => {
    return<header>
            <h1>News</h1>
        <p>{formatData(new Date())}</p>
        </header>
    ;
}

export default Header;
