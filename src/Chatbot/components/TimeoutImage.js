import React from 'react'
import timeoutLogo from '../../Assets/timeout.png'

export default function TimeoutImage(props) {

    console.log(props.state.userData)

    return (
        <div className='img-component'>
            <div className='img-container3'>
                <img src={timeoutLogo} alt="" style={{ width: '100%' }}/><br></br>
            </div>
        </div>
    )
}
