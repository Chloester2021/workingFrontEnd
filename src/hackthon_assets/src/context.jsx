import React, { useState, useContext, useEffect, useCallback } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { contract } from "../../declarations/contract";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    const localHost = "http://localhost:8080/";
    const agent = new HttpAgent({ host: localHost });

    // const [signedIn, setSignedIn] = useState(false)
    // const [principal, setPrincipal] = useState("")
    // const [client, setClient] = useState()

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



    // const initAuth = async () => {
    //     // create auth method
    //     const client = await AuthClient.create()
    //     // check if user is authenticated
    //     const isAuthenticated = await client.isAuthenticated()

    //     setClient(client)

    //     if (isAuthenticated) {
    //         // get auth client identity
    //         const identity = client.getIdentity()
    //         const principal = identity.getPrincipal().toString()
    //         console.log(principal);
    //         setSignedIn(true)
    //         setPrincipal(principal)
    //     }
    // }

    // const signIn = async () => {
    //     const { identity, principal } = await new Promise((resolve, reject) => {
    //         client.login({
    //             identityProvider: "https://identity.ic0.app",
    //             onSuccess: () => {
    //                 const identity = client.getIdentity()
    //                 const principal = identity.getPrincipal().toString()
    //                 resolve({ identity, principal })
    //             },
    //             onError: reject,
    //         })
    //     })
    //     setSignedIn(true)
    //     setPrincipal(principal)
    //     localStorage.setItem('user', principal)
    //     navigate('/mint')
    // }

    // const signOut = async () => {
    //     await client.logout()
    //     setSignedIn(false)
    //     setPrincipal("")
    //     localStorage.clear()
    //     navigate('/')
    // }

    // useEffect(() => {
    //     initAuth()
    // }, [])




    return (
        <AppContext.Provider
            value={{
                messages,
                timeElipsed,
                // signIn,
                // signOut,
                // signedIn,
                // principal,
                // client

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