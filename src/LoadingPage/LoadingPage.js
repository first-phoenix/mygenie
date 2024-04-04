import React from 'react';
import logo from '../Assets/logowithname.jpg'; // Import your website logo;
import './LoadingPage.css';

const LoadingPage = () => {
    return (
        <div className="loading-container">
            <img src={logo} alt="Website Logo" className="logowithname" />
            <div className="loading-text">Unleashing Human Capability...</div>
        </div>
    );
};

export default LoadingPage;
