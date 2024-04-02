import React from 'react'
import pdfLogo from '../../Assets/pdfLogo.png'

export default function DipslayImage2(props) {

    console.log(props.state.userData)

    return (
        <div className='img-component'>
            <div className='img-container2'>
                <img src={pdfLogo} alt="" style={{ width: '100%' }}/><br></br>
                <p>FreshGuard PouchTech</p>
            </div>
            <div className='img-container2'>
                <img src={pdfLogo} alt="" style={{ width: '100%' }}/><br></br>
                <p>LongLife SealPro</p>
            </div>
            <div className='img-container2'>
                <img src={pdfLogo} alt="" style={{ width: '100%' }}/><br></br>
                <p>PureExtend BabyGuard</p>
            </div>
        </div>
    )
}
