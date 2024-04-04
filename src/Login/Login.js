import React from 'react';
import './Login.css'; // Importing the CSS file for styling
import '../App.css';
import loginButton from '../Assets/log-in.png';
import accentureLogo from '../Assets/Accenture_Logo.png'; // Importing accenture logo
import logoImage from '../Assets/logo.jpg';
import loginlogo from '../Assets/login-user.png';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className='login-wrapper'>
            {/* Adding accenture logo to the top left corner */}
            <Link to='/adminlogin'><img src={accentureLogo} alt='Accenture Logo' className='top-right-logo'></img></Link>
            {/* Adding abc logo to the top right corner */}
            <Link to='/'><img src={logoImage} alt='Mygenie Logo' className='top-left-logo'></img></Link>
            <div className="login-container">
                <img src={loginlogo} className='loginuser' alt='UserImage'></img>
                <div className="form-group">
                    <label>Email ID</label>
                    <input type="text" placeholder="Enter your email" className='login-input'/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" className='login-input'/>
                </div>
                <div className="form-group">
                    <label>Two factor authentication</label>
                    <input type="text" placeholder="Enter authentication code" className='login-input'/>
                </div>
                <div className="form-group">
                    <label>Choose Role</label>
                    <select>
                        <option disabled selected>Select Role</option>
                        <option value="Packaging Manager">Packaging Director</option>
                        <option value="Compliance Manager">Compliance Manager</option>
                        <option value="Labelling Manager">Labelling Manager</option>
                    </select>
                </div>
                <Link to='/landingpage'>
                <img src={loginButton} alt='Log in' className='loginbutton'></img>
                </Link>
            </div>
        </div>
    );
};

export default Login;
