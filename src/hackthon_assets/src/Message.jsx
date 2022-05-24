import React, { useEffect, useState } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory, canisterId } from "../../declarations/contract";
import { Principal } from "@dfinity/principal";


function Message() {
    const [messages, setMessages] = useState([])
    const userId = Principal.fromText('rkp4c-7iaaa-aaaaa-aaaca-cai')
    const localHost = "http://localhost:8080/";
    const agent = new HttpAgent({ host: localHost });

    const loadMessage = async () => {
        const messageActor = await Actor.createActor(idlFactory, {
            agent,
            canisterId: userId,
        })
        const messages = await messageActor.message('{}')

        console.log(messages)
        setMessages(messages)
    }
    useEffect(() => {
        loadMessage()
    }, [])
    return (

        <div className="chatboard">
            {[...messages].reverse().map((message) => {
                return (
                    <div key={message.id}><p className="card-text">{message.text}</p></div>
                )
            })}
        </div>
    )
}

export default Message