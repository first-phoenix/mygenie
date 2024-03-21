import React from 'react';
import './Welcome.css'; // Importing the CSS file for styling
import homeImage from '../Assets/homeicon.png';
import logoImage from '../Assets/logo.jpg';
import welcomeAvatar from '../Assets/WelcomeAvatar.jpg';
import { Link } from 'react-router-dom';

const Welcome = () => {

    // const handleLogin = () => {
    //     // Redirect to the second page
    //     window.location.href = '/home';
    // };

    return (
        <div className='welcome-wrapper'>
            <img src={logoImage} alt="Logo" className="logo" /> {/* Added logo image */}
            <div className="welcome-container">
                <h1>Quick lookup</h1>
                <h2>Welcome Jane</h2>
                <div className="user-image">
                    <img src={welcomeAvatar} alt="User" className='user-image-avatar' />
                </div>
                <div className="user-input">
                    <h3 className='askAssistance'>How can I help you?</h3>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Type here" className="search-input" />
                        <img src="https://static.vecteezy.com/system/resources/previews/000/420/512/non_2x/microphone-icon-vector-illustration.jpg" alt="Microphone" className="microphone-icon" />
                    </div>
                </div>
                <Link to='/home'><img src={homeImage} alt="Home" className="home-button" /></Link>
            </div>
        </div>
    );
};

export default Welcome;
