import React, { useEffect, useState } from "react"
import { loading, switchover } from './main'
import { useGlobalContext } from './context'
import Search from "./Search"
import heartGit from '../assets/homepage/jump-heart.png'
import irrArrow from '../assets/homepage/irregular arrow.png'
import arrow from '../assets/homepage/arrow.png'
import signArrow from '../assets/homepage/sign-arrow.png'

export function Hero() {

    const { messages } = useGlobalContext()
    const [input, setInput] = useState('')

    useEffect(() => {
        loading()
    }, [])

    const handleSubmit = () => {
        switchover()
    }


    const handleClick = () => {
        setInput(input)
    }


    return (
        <>
            <img className="jump-heart shake shake-slow" src={heartGit} alt="" />

            <img className="right-arrow" src={irrArrow} alt="" />

            <div className="headline">
                <img className="left-arrow" src={arrow} alt="" />
                <h1>What a lovely time,</h1>
                <h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; when you were</h1>
                <h1>mine and I was <span className="outline">yours.</span></h1>
                <p>Express love in blockchain.</p>
                <button type="submit" className="headlinebutton" onClick={handleSubmit}>Get start now</button>
            </div>

            <div className="headline-2">
                <div className="sign">
                    <a href="#">Sign in <img src={signArrow} /></a>
                </div>
                <div className="welcome">
                    <span className="welcome-1"> Welcome to </span><br />
                    <span className="welcome-2"> Love.in.Cyber. </span><br />
                    <div className="welcome-3"> A new way to express your LOVE! </div><br />
                    <input className="welcome-input" type="text" placeholder="Search for her/him" onChange={(e) => setInput(e.target.value)} />
                    <img className="welcome-btn" src={signArrow} onClick={handleClick} />
                </div>
            </div>

            <Search data={messages} input={input} />

        </>
    )
}