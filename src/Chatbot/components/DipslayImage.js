import React from 'react'

export default function DipslayImage(props) {
    // const { imageUrl, link } = props.state.userData.product;
    const imageUrl1 = "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600";
    const imageUrl2 = "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600";
    const imageUrl3 = "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600";
    const imageUrl4 = "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600";

    console.log(props.state.userData)

    return (
        <div className='img-component'>
            <div className='img-container'>
                <img src={imageUrl1} alt="" />
            </div>
            <div className='img-container'>
                <img src={imageUrl2} alt="" />
            </div>
            <div className='img-container'>
                <img src={imageUrl3} alt="" />
            </div>
            <div className='img-container'>
                <img src={imageUrl4} alt="" />
            </div>
        </div>
    )
}
