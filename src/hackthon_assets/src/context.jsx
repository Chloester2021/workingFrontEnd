import React, { useState, useContext, useEffect } from "react";
import { contract } from "../../declarations/contract";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [messages, setMessages] = useState([])




    const loadMessage = async () => {
        const messages = await contract.message('{}')
        setMessages(messages)
    }

    function timeElipsed(timestamp, currentTime) {
        const miliSeconds = timestamp.toString() / 1000000
        const diffTime = Math.abs(currentTime - miliSeconds)
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diffTime - days * 24) / (1000 * 60 * 60))
        const mins = Math.floor((diffTime - days * 24 - hours * 60) / (1000 * 60))
        if (days >= 1) { return days === 1 ? days + ' day' : days + ' days' }
        else if (hours >= 1) return (hours === 1 ? hours + ' hr' : hours + ' hrs')
        else return (mins === 1 ? mins + ' min' : mins + ' mins')
    }


    useEffect(() => {
        loadMessage()
    }, [])

    return (
        <AppContext.Provider
            value={{
                messages,
                timeElipsed,


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