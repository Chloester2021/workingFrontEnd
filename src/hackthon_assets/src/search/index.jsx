import React from "react";
import { useGlobalContext } from '../context'
import Search from './Search';
// import data from "./MOCK_DATA";

function Setup() {
    const { messages } = useGlobalContext()
    return (
        <>
            <Search data={messages} />
        </>
    );
}

export default Setup;