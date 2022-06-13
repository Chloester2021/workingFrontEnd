import React, { useState, useEffect } from 'react'
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client"
import { idlFactory, canisterId } from "../../../declarations/contract";
import { Link, useNavigate } from 'react-router-dom';
import { loading, switchover, noNFT } from './mint-main'
import Jazzicon from 'react-jazzicon'
import logo from "../../assets/mint-page/img/logo.png"
import hearts from "../../assets/mint-page/img/3heart.png"
import ringNFT from "../../assets/mint-page/img/ring-nft.png"
import share from "../../assets/mint-page/img/share.png"
import date from "../../assets/mint-page/img/date.png"
import heartArrow from "../../assets/mint-page/img/heart-arrow.png"
// import downArrow from "../../assets/mint-page/img/DownArrow.png"
// import LikeMessage from "../../assets/mint-page/img/LikeMessage.png"
// import Ring from "../../assets/mint-page/img/Ring.png"
// import Prize from "../../assets/mint-page/img/Prize.png"
// import User from "../../assets/mint-page/img/User.png"





function Mint() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const navigate = useNavigate()
    const user = localStorage.getItem("user");
    const shortenedName = `${user.substring(0, 6)} ... ${user.substring(user.length - 6)}`
    const userA = user.match(/\d/g).join('')
    const userB = userA.substring(3, 5)
    const date = new Date()
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const today = date.toLocaleDateString("en-US", options)
    console.log(today);


    // ----- to be removed when live
    const userId = Principal.fromText('rkp4c-7iaaa-aaaaa-aaaca-cai')
    const localHost = "http://localhost:8080/";
    const agent = new HttpAgent({ host: localHost });
    agent.fetchRootKey()
    //  --------- to be removed
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !text) return;
        sendMessage({ text, name })
        switchover()
    };



    const sendMessage = async ({ text, name }) => {
        const authClient = await AuthClient.create()
        const identity = await authClient.getIdentity()
        // ----------replace belwo with try block
        // const authenticatedActor = await Actor.createActor(canisterId, {
        //     agentOptions: { identity, }
        // })
        // const newMessage = await authenticatedActor.write(text, name)
        // ----------------------to be replaced-----------------------
        try {
            const userActor = await Actor.createActor(idlFactory, {
                agent,
                canisterId: userId,
            })
            const newMessage = await userActor.write(text, name)
            // ------------------to be replaced
        } catch (error) {
            console.log(error);
        }

        // ---------------------------------------

    }

    const signOut = async () => {
        localStorage.clear()
        navigate('/')
    }

    useEffect(() => { loading() }, [])

    return (
        <section >
            <Link to='/'>
                <img className="logo" src={logo} alt="" />
            </Link>

            <div className="container">
                <div className="card">


                    {/* 
            <!-- =============================================================================================== -->
            <!-- ===================================   page1 - mint   ========================================== -->
            <!-- =============================================================================================== --> */}
                    <div className="content">
                        <h2>Hello, </h2>
                        <h2 className="h2-font">{shortenedName}</h2>
                        <div className="bottom-line"></div>
                        <div className="before-text">Leave your romantic <b>Love Message</b>.</div>
                        <form onSubmit={handleSubmit}>
                            <div className="love-message-wrapper">

                                <div className="textarea">
                                    <textarea className="love-text" placeholder="Type love message..." cols="15"
                                        rows="27" type="text"
                                        id="text"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}></textarea>
                                </div>

                                <div className="NFT-wrapper">
                                    <div className="own-wrapper">

                                        <svg viewBox="0 0 32 32" id="heart">
                                            <path id="heart-path" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
                                C30,20.335,16,28.261,16,28.261z" />
                                        </svg>

                                        <div className="own">
                                            <div className="own-title">
                                                {/* <!-- 加空格是因为样式用了居中布局，居中之后加空格让文字左对齐，如果用左对齐的话整个文本都左对齐了 --> */}
                                                LOVE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                                                LOCKED
                                            </div>
                                            <div className="own-img">
                                                <Jazzicon diameter={100} seed={userB} />
                                            </div>
                                            <div className="own-address"></div>
                                            <div className="own-name">
                                                <input
                                                    type="text"
                                                    className="form-input"
                                                    placeholder="Type user name"
                                                    id="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="NFT">
                                        <div className="NFT-title">MY&nbsp;&nbsp;&nbsp;<br />NFTs</div>
                                        <div className="NFT-content">
                                            <button>I want add NFT</button>
                                            <button >I don't need NFT</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- sub按钮 --> */}
                            <button className="btn-submit" onClick={switchover}>Submit</button>
                        </form>
                    </div>



                    <div className="content-2">

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
                                        {text}
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
                                <div className="address-owner">{`${user.substring(0, 10)}...`}</div>
                                <div className="address-lover">{name}</div>
                            </div>
                            {/* <div className="contract-name">
                                <div className="name-owner">{`${user.substring(0, 10)}...`}</div>
                                <div className="name-lover">{name}</div>
                            </div> */}
                            <div className="bottom-address-wrapper">
                                <div className="bottom-address">
                                    {/* Record: 0x56cc...b3eab4 */}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {today}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- 右上角下拉菜单 --> */}
                <div className="draft-profile-wrapper">
                    <div className="draft-profile">
                        <Jazzicon diameter={43} seed={userA} />
                        {/* <img className="draft-img" width="43px" src={profileFoto} alt=" " /> */}

                        <div className="draft-name">

                            <div className='profile-id'>
                                {`${user.substring(0, 6)}...`}
                                <br></br>
                            </div>
                            {/* <img width="25px" src={downArrow} />

                            <ul className="draft-ul">
                                <li className="draft-li"><img src={LikeMessage} alt=" " />
                                    &nbsp;&nbsp; Send message</li>
                                <li className="draft-li"><img src={Ring} alt=" " /> &nbsp;&nbsp;
                                    The ring shop</li>
                                <li className="draft-li"><img src={Prize} alt=" " /> &nbsp;&nbsp;
                                    Ranking</li>
                                <li className="draft-li"><img src={User} alt=" " /> &nbsp;&nbsp;
                                    Profile</li>
                                <li className="draft-li"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign off</li>
                            </ul> */}

                        </div>
                    </div>
                    <div className="notice">
                        <a onClick={signOut}>Sign out</a>

                    </div>
                </div>

            </div>
        </section >

    )
}

export default Mint