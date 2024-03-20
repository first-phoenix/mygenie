import React from 'react';
import './Welcome.css'; // Importing the CSS file for styling
import homeImage from '../Assets/homeicon.png';

const Welcome = () => {

    const handleLogin = () => {
        // Redirect to the second page
        window.location.href = '/page2';
    };

    return (
        <div className="welcome-container">
            <h1>Quick lookup</h1>
            <h2>Welcome Jane</h2>
            <div className="user-image">
                <img src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg" alt="User" />
            </div>
            <div className="user-input">
                <h3 className='askAssistance'>How can I help you?</h3>
                <div className="input-wrapper">
                    <input type="text" placeholder="Type here" className="search-input" />
                    <img src="https://static.vecteezy.com/system/resources/previews/000/420/512/non_2x/microphone-icon-vector-illustration.jpg" alt="Microphone" className="microphone-icon" />
                </div>
            </div>
            <img src={homeImage} alt="Home" className="home-button" onClick={handleLogin} />
        </div>
    );
};

export default Welcome;
