// List component is for test only!
import React, { useEffect, useState } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory, canisterId } from "../../declarations/user_profile";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client"


function List() {
    const [profile, setProfile] = useState()

    const userId = Principal.fromText('qoctq-giaaa-aaaaa-aaaea-cai')
    const localHost = "http://localhost:8080/";
    const agent = new HttpAgent({ host: localHost });
    // agent.fetchRootKey()

    const loadUserProfile = async () => {
        const authClient = await AuthClient.create()
        const identity = await authClient.getIdentity()
        // // below should work if deployed live
        // const authenticatedActor = await Actor.createActor(canisterId, {
        //     agentOptions: { identity, }
        // })
        // const data = await authenticatedActor.getOwnProfile()

        const userActor = await Actor.createActor(idlFactory, {
            agent,
            canisterId: userId,
        })
        const data = await userActor.getOwnProfile()
        const name = data.name
        console.log(data)
        setProfile(name)
    }

    useEffect(() => {
        loadUserProfile()
    }, [])

    return (
        <div>
            <p>user profile is {profile}</p>
        </div>
    )
}

export default List