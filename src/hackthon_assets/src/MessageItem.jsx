import React from 'react'
import Jazzicon from 'react-jazzicon'
import heartArrow from '../assets/home-page/assets/heart-arrow.png'
import { useGlobalContext } from './context'

const MessageItem = ({
    message
}) => {
    const { timeElipsed } = useGlobalContext()
    const { text, user_self_id, timestamp, user_other_id } = message
    const userA = user_self_id.match(/\d/g).join('')
    const currentTime = new Date()
    const results = timeElipsed(timestamp, currentTime)

    return (

        <div className="chatboard-wrapper">
            <div className="left-box">
                <div className="profile1">
                    <Jazzicon diameter={50} seed={userA} />
                    <span> {user_self_id?.length > 6 ? `${user_self_id.substring(0, 4)}...` : user_self_id}</span>
                    <div>owner</div>
                </div>
                <div className="mid-heart">
                    <img src={heartArrow} alt="heartArrow" />
                </div>
                <div className="profile2">
                    <Jazzicon diameter={50} seed={Math.round(Math.random() * 10000000)} />
                    <span>
                        {user_other_id?.length > 6 ? `${user_other_id.substring(0, 6)}...` : user_other_id}
                    </span>
                    <div>
                        &nbsp;
                    </div>
                </div>
            </div>
            <div className="right-box">
                <div className="box-message">
                    {text?.length > 40 ? `${text.substring(0, 40)}...` : text}
                </div>
                <span className="box-time">{results} ago</span>
            </div>
        </div>
    )
}

export default MessageItem