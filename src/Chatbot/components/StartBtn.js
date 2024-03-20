import React from 'react'

export default function StartBtn(props) {

    const initialMessage = () => {
        props.actions.initialMessage();
    }

    return (
        <div>
            <button className='measures-btn' onClick={() => initialMessage()}>Suggested Prompt -  What measures are in place to ensure consistency in material quality from different suppliers?</button>
            <button className='measures-btn trends-btn' onClick={() => initialMessage()}>Suggested Prompt - Latest trends in the packaging within the CPG industry?</button>
            <button className='measures-btn quality-btn' onClick={() => initialMessage()}>Suggested Prompt -  What are key quality control checkpoints in the packaging production process</button>
        </div >
    )
}
