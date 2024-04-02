import React from 'react';
import './Welcome.css'; // Importing the CSS file for styling
import homeImage from '../Assets/homeicon.png';
import logoImage from '../Assets/logo.jpg';
import welcomeAvatar from '../Assets/WelcomeAvatar.jpg';
import microphoneImage from '../Assets/microphone.png';
import accentureLogo from '../Assets/Accenture_Logo.png'; // Importing accenture logo

import { Link } from 'react-router-dom';

const Welcome = () => {

    return (
        <div className='welcome-wrapper'>
            {/* Adding accenture logo to the top left corner */}
            <img src={accentureLogo} alt='Accenture Logo' className='top-right-logo'></img>
            {/* Adding abc logo to the top right corner */}
            <Link to='/'><img src={logoImage} alt='Mygenie Logo' className='top-left-logo'></img></Link>            <div className="welcome-container">
                <h1>Quick lookup</h1>
                <h2>Welcome Jane</h2>
                <div className="user-image">
                    <img src={welcomeAvatar} alt="User" className='user-image-avatar' />
                </div>
                <div className="user-input">
                    <h3 className='askAssistance'>How can I help you?</h3>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Type here" className="search-input" />
                        <img src={microphoneImage} alt="Microphone" className="microphone-icon" />
                    </div>
                </div>
                <Link to='/chathere'><img src={homeImage} alt="Home" className="home-button" /></Link>
            </div>
        </div>
    );
};

export default Welcome;
