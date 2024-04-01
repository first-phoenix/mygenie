import React from 'react'

export default function StartBtn(props) {

    const initialMessage = () => {
        props.actions.initialMessage();
    }

    return (
        <div className='threeWidgets'>
            <button className='measures-btn' onClick={() => initialMessage()}>Suggested Prompt -  View Quality Control Compliances as per ingredient list by country within Tetrapak</button>
            <button className='measures-btn trends-btn' onClick={() => initialMessage()}>Suggested Prompt – Review latest trends in the packaging within the CPG industry?​</button>
            <button className='measures-btn quality-btn' onClick={() => initialMessage()}>Suggested Prompt -  Latest prototypes leveraging cutting edge packaging technology submitted for patents​</button>
        </div >
    )
}
