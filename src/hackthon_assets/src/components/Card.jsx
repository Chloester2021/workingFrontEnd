import React, { useState, useEffect } from 'react'
import Jazzicon from 'react-jazzicon'
import hearts from "../../assets/mint-page/img/3heart.png"
import ringNFT from "../../assets/mint-page/img/ring-nft.png"
import heartArrow from "../../assets/mint-page/img/heart-arrow.png"
import { AiOutlineCopy } from "react-icons/ai"

const Card = ({ receiver, text, code, sender }) => {

    const userA = sender.match(/\d/g).join('')
    const userB = userA.substring(3, 5)
    const date = new Date()
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const today = date.toLocaleDateString("en-US", options)
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setAlert(false), 1000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (

        <section>
            <h2>Congratulations!</h2>
            <div className="bottom-line"></div>
            <div className="before-text">Your <b>Lovelocked</b> in blockchain.</div>
            <img className="three-heart" src={hearts} alt="" />
            <div className="contract-wrapper" id="wrapper-hover">
                <div className="text-box">
                    <div className="show-NFT">
                        <img src={ringNFT} alt="" />
                    </div>
                    <div className="right-box">
                        {/* <div className="share-btn">
                                        <a href="#">
                                            <img src={share} alt="" />
                                        </a>
                                    </div> */}
                        <div className="text">
                            Message was {code ? "posted" : "linked"} successfully: "{text}"
                            {alert && <p className="alert"> code copied to clipboard</p>}
                            {code && <p >Share code {code} <AiOutlineCopy onClick={() => {
                                setAlert(true);
                                navigator.clipboard.writeText(code);
                            }} /> with your friend to link this message.</p>}

                        </div>
                        <div className="date">
                            <img src={date} alt="" />
                            {/* <span>520days</span> */}
                        </div>
                        {/* <div className="money">
                                        10$
                                    </div> */}
                    </div>
                </div>
                <div className="contract-img">
                    <Jazzicon diameter={60} seed={userA} />

                    {/* <img style={{ width: "7 %" }} src={profileFoto} alt="" /> */}
                    <img src={heartArrow} alt="" />
                    <Jazzicon diameter={60} seed={userB} />
                    {/* <img style={{ width: "7 %" }} src={walletProfile} alt="" /> */}
                </div>
                <div className="contract-name">
                    <div className="address-owner">{`${sender.substring(0, 8)}...`}</div>
                    <div className="address-lover">{receiver}</div>
                </div>
                {/* <div className="contract-name">
                                <div className="name-owner">{`${user.substring(0, 10)}...`}</div>
                                <div className="name-lover">{name}</div>
                            </div> */}
                <a href='' className="over-and-back">{code ? "Send Another Message" : "Link another code"}</a>
                <div className="bottom-address-wrapper">
                    <div className="bottom-address">
                        {/* Record: 0x56cc...b3eab4 */}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {today}
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Card