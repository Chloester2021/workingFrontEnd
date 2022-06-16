import React, { useEffect, useState } from "react"
import { loading, switchover, switchback } from './main'
import { useGlobalContext } from './context'
import { Auth } from "./components/Auth"
import Search from "./Search"
import heartGit from '../assets/home-page/assets/jump-heart.png'
import irrArrow from '../assets/home-page/assets/irregular-arrow.png'
import arrow from '../assets/home-page/assets/arrow.png'
import signArrow from '../assets/home-page/assets/sign-arrow.png'

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


    const handleGoback = () => {
        setInput('')
        switchback()
    }

    return (
        <>
            <Auth />
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
                <div className="go-back-home">
                    <a href="#" onClick={handleGoback}> Go back <img src={signArrow} /></a>
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