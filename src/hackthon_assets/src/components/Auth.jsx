import React, { useEffect, useState } from "react"
import { AuthClient } from "@dfinity/auth-client"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/mint-page/img/logo.png"
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

function Auth() {
  const [signedIn, setSignedIn] = useState(false)
  const [principal, setPrincipal] = useState("")
  const [client, setClient] = useState()
  const [showDropdown, setShowDropdown] = useState(false);
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

    <div className="navigation-bar" id="navigation-container">



      <Link to='/'>
        <img src={logo} />
      </Link>
      <div className="draft-profile-wrapper">
        <a href="https://loveincyber.super.site/" target="_blank">Docs</a>


        {!signedIn && client ? (

          <a onClick={signIn} className="walletborder">
            Connect the wallet
          </a>

        ) : null
        }
        <div className="notice">
          {
            signedIn && (
              <>
                <div className="btn-container">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <FaUserCircle />
                    {principal.substring(0, 6)}
                    <FaCaretDown />
                  </button>
                  <div className={showDropdown ? "dropdown show-dropdown" : "dropdown"}>
                    <button type="button" className="dropdown-btn" >

                      <Link to='/mint'>
                        Send Message
                      </Link>
                    </button>
                    <button type="button" className="dropdown-btn" >
                      <Link to='/invite'>
                        Link Code
                      </Link>
                    </button>
                    <button type="button" className="dropdown-btn" onClick={signOut}>
                      logout
                    </button>
                  </div>
                </div>
              </>

            )
          }
        </div>
      </div>

    </div>





  )
}

export { Auth }
