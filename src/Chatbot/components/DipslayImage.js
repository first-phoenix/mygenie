import React from 'react'
import industryImage1 from '../../Assets/industrypic1.png'
import industryImage2 from '../../Assets/industrypic2.png'

export default function DipslayImage(props) {

    console.log(props.state.userData)

    return (
        <div className='img-component'>
            <div className='img-container'>
                <img src={industryImage1} alt="" style={{ width: '100%' }}/>
            </div>
            <div className='img-container'>
                <img src={industryImage2} alt="" style={{ width: '100%' }}/>
            </div>
        </div>
    )
}
