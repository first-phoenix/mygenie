import React from 'react';
import './Home.css';
import logoImage from '../Assets/logo.jpg';
import clickImage from '../Assets/click-here.png';

const Home = () => {

    const handleLogin = () => {
        // Redirect to the second page
        window.location.href = '/chathere';
    };

    return (
        <div className='home-wrapper'>
            <img src={logoImage} alt='logo' className='logo'></img>
            <div className="home-container">
                <h2 className='welcomeNote'>Hi! Jane!</h2>
                <div className="tile">
                    <h2>Start your next research or project here</h2>
                    <img src={clickImage} onClick={handleLogin} alt='click here' className='clickImage'></img>
                </div>
                <p>----------------------------------------------------------------------------------------</p>
                <h2 className='welcomeNote'>Start your day</h2>
                <div className="tile">
                    <h2>Most important organization news</h2>
                    <img src={clickImage} alt='click here' className='clickImage'></img>
                </div>
            </div>
        </div>
    );
};

export default Home;
