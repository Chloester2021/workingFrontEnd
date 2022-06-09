import React, { useState, useContext, useReducer, useEffect } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { contract } from "../../declarations/contract";
import { Principal } from "@dfinity/principal";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    const localHost = "http://localhost:8080/";
    const agent = new HttpAgent({ host: localHost });


    const loadMessage = async () => {
        const messages = await contract.message('{}')
        setMessages(messages)
    }


    useEffect(() => {
        loadMessage()
    }, [])


    return (
        <AppContext.Provider
            value={{
                messages
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };