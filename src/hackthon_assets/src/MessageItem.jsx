import React from 'react'
import profilePhoto from '../assets/homepage/profile-foto.png'
import heartArrow from '../assets/homepage/heart-arrow.png'
import walletPhoto from '../assets/homepage/2nd-wallet-profile.png'

const MessageItem = ({
    message
}) => {
    const { id, text, user_self_id, timestamp, user_other_id } = message

    return (

        <div class="chatboard-wrapper">
            <div class="left-box">
                <div class="profile1">
                    <img src={profilePhoto} alt="profilePhoto" />
                    <span> {user_self_id?.length > 6 ? `${user_self_id.substring(0, 6)}...` : user_self_id}</span>
                    <div>owner</div>
                </div>
                <div class="mid-heart">
                    <img src={heartArrow} alt="heartArrow" />
                </div>
                <div class="profile2">
                    <img src={walletPhoto} alt="walletPhoto" />
                    <span>
                        {user_other_id?.length > 6 ? `${user_other_id.substring(0, 6)}...` : user_other_id}
                    </span>
                    <div>
                        &nbsp;
                    </div>
                </div>
            </div>
            <div class="right-box">
                <div class="box-message">
                    {text?.length > 40 ? `${text.substring(0, 40)}...` : text}
                </div>
                <span class="box-time">2h ago</span>
            </div>
        </div>
    )
}

export default MessageItem