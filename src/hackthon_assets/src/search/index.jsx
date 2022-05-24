import React from 'react';
import Search from './Search';
import data from "./data";

function Setup() {
    return (
        <li>
            <Search data={data} />
        </li>
    );
}

export default Setup;