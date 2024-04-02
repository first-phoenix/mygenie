import React from 'react'

export default function Btn2(props) {

    console.log(props.state.userData)

    return (
        <div className='threeWidgets'>
            <button className='measures-btn'>Suggested Prompt -  Review Trade Agreements with Yemen</button>
            <button className='measures-btn trends-btn'>Suggested Prompt – Consumer Preferences for baby food in Philippines​</button>
            <button className='measures-btn quality-btn'>Suggested Prompt -  Review existing supply chain partners of Tetrapak with offices in Philippines​</button>
        </div >
    )
}
