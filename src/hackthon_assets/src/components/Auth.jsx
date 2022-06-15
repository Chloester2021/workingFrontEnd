import React, { useEffect, useState } from "react"
import { AuthClient } from "@dfinity/auth-client"
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/home-page/assets/logo.png'

function Auth() {
  const [signedIn, setSignedIn] = useState(false)
  const [principal, setPrincipal] = useState("")
  const [client, setClient] = useState()
  const navigate = useNavigate()
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
    // setUser(principal)
    localStorage.setItem('user', principal)
    navigate('/mint')
  }

  const signOut = async () => {
    await client.logout()
    setSignedIn(false)
    setPrincipal("")
    // setUser(null)
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    initAuth()
  }, [])

  return (
    <>


      <div className="navigation-bar" id="navigation-container">
        <Link to='/'>
          <img src={logo} />
        </Link>


        <ul>

          <li>
            <a href="#">Whitepaper</a>
          </li>

          {!signedIn && client ? (
            <li>
              <a onClick={signIn} className="walletborder">
                Connect the wallet
              </a>
            </li>
          ) : null
          }

          {
            signedIn && (
              <li>
                <Link to='/mint'>
                  Send Message
                </Link>
                <a onClick={signOut}>Sign out</a>
              </li>
            )
          }

        </ul>

      </div>

    </>



  )
}

export { Auth }
