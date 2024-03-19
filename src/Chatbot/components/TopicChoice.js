import React from 'react'

export default function TopicChoice(props) {
    const preference = (preference) => {
        console.log(props);
        const { name, age, category } = props.state.userData;
        const product = props.state.data[category][preference];
        props.state.userData.product = product;
        props.actions.finalResult(name, age, preference, product.name);
    }

    return (
        <div>
            <button className='measures-btn' onClick={() => preference("measures")}>Suggested Prompt -  What measures are in place to ensure consistency in material quality from different suppliers?​</button>
            <button className='measures-btn trends-btn' onClick={() => preference("trends")}> Suggested Prompt - Latest trends in the packaging within the CPG industry?​</button>
            <button className='measures-btn quality-btn' onClick={() => preference("quality")}> Suggested Prompt -  What are key quality control checkpoints in the packaging production process​</button>
        </div >
    )
}
