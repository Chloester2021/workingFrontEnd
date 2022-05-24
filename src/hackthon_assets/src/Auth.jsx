import React, { useCallback, useEffect, useState } from "react"
import { AuthClient } from "@dfinity/auth-client"
import Search from "./search"

function Auth() {
  const [signedIn, setSignedIn] = useState(false)
  const [principal, setPrincipal] = useState("")
  const [client, setClient] = useState()

  const initAuth = async () => {
    // create auth method
    const client = await AuthClient.create()
    // check if user is authenticated
    const isAuthenticated = await client.isAuthenticated()

    setClient(client)

    if (isAuthenticated) {
      // get auth client identity
      const identity = client.getIdentity()
      const principal = identity.getPrincipal().toString()
      setSignedIn(true)
      setPrincipal(principal)
    }
  }

  const signIn = async () => {
    const { identity, principal } = await new Promise((resolve, reject) => {
      client.login({
        identityProvider: "https://identity.ic0.app",
        onSuccess: () => {
          const identity = client.getIdentity()
          const principal = identity.getPrincipal().toString()
          resolve({ identity, principal })
        },
        onError: reject,
      })
    })
    setSignedIn(true)
    setPrincipal(principal)
  }

  const signOut = async () => {
    await client.logout()
    setSignedIn(false)
    setPrincipal("")
  }

  useEffect(() => {
    initAuth()
  }, [])

  return (

    <div class="navigation-bar" id="navigation-container">

      <a href="#">
        <img src="https://i.imgur.com/nDYAiTj.png" />
      </a>
      <ul>
        {signedIn && <Search />}
        <li><a href="#">The Ring shop</a></li>
        {!signedIn && client ? (
          <li>
            <a onClick={signIn}>
              <span class="walletborder">Connect the wallet</span></a></li >
        ) : null
        }

        {
          signedIn ? (
            <li>
              <a onClick={signOut}>Sign out</a>
            </li>
          ) : null
        }
      </ul>
    </div>





  )
}

export { Auth }
