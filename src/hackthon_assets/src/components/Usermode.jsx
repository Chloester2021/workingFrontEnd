import React from 'react'
import { Helmet } from "react-helmet";
import profilefoto from '../../assets/mint-page/img/profile-foto.png'
import DownArrow from '../../assets/mint-page/img/DownArrow.png'
import LikeMessage from '../../assets/mint-page/img/LikeMessage.png'
import Ring from '../../assets/mint-page/img/Ring.png'
import Prize from '../../assets/mint-page/img/Prize.png'
import User from '../../assets/mint-page/img/User.png'
import Vector from '../../assets/mint-page/img/Vector.png'

function Usermode() {
    return (
        <>
            <Helmet>

                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="favicon.png" />
                <title>Love in Cyber</title>
                <body id="mint-page"></body>

            </Helmet>

            <div className="draft-profile-wrapper">
                <div className="draft-profile">
                    <img className="draft-img" width="43px" src={profilefoto} alt="profilefoto" />
                    <div className="draft-name">

                        <div>
                            Vitalik.eth
                            <br></br>
                        </div>
                        <img width="25px" src={DownArrow} />

                        <ul className="draft-ul">
                            <li className="draft-li"><img src={LikeMessage} alt="LikeMessage" /> &nbsp;&nbsp; Send message</li>
                            <li className="draft-li"><img src={Ring} alt='Ring' /> &nbsp;&nbsp; The ring shop</li>
                            <li className="draft-li"><img src={Prize} alt="Prize" /> &nbsp;&nbsp; Ranking</li>
                            <li className="draft-li"><img src={User} alt="User" /> &nbsp;&nbsp; Profile</li>
                            <li className="draft-li"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign off</li>
                        </ul>

                    </div>
                </div>
                <div className="notice">
                    <a href="#">
                        <img src={Vector} alt="Vector" />
                    </a>
                </div>
            </div>


        </>
    )
}



export default Usermode