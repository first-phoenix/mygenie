import React from 'react';
import './Home.css';
import logoImage from '../Assets/logo.jpg'

const Home = () => {

    const handleLogin = () => {
        // Redirect to the second page
        window.location.href = '/chathere';
    };

    return (
        <div className='home-wrapper'>
            <img src={logoImage} alt='logo' className='logo'></img>
            <div className="home-container">
                <h2>Hi! Jane!</h2>
                <div className="tile">
                    <h2>Start your next research or project here</h2>
                    <button onClick={handleLogin}>Click here</button>
                </div>
                <p>----------------------------------------------------------------------------------------</p>
                <h2>Start your day</h2>
                <div className="tile">
                    <h2>Most important organization news</h2>
                    <button>Click here</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
