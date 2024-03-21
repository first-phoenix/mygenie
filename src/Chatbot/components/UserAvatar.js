import React from 'react'
import userAvatar from '../../Assets/WelcomeAvatar.jpg'

export default function UserAvatar() {

    return (
        <div className='UA' >
            <img src={userAvatar} className='UA' alt='User'></img>
        </div>
    )
}