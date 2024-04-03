import React from 'react';
import './AdminLogin.css'; // Importing the CSS file for styling
import '../../App.css';
import loginButton from '../../Assets/log-in.png';
import accentureLogo from '../../Assets/Accenture_Logo.png'; // Importing accenture logo
import logoImage from '../../Assets/logo.jpg';
import { Link } from 'react-router-dom';

const AdminLogin = () => {

    return (
        <div className='adminlogin-wrapper'>
            {/* Adding accenture logo to the top left corner */}
            <Link to='/adminlogin'><img src={accentureLogo} alt='Accenture Logo' className='top-right-logo'></img></Link>
            {/* Adding abc logo to the top right corner */}
            <Link to='/'><img src={logoImage} alt='Mygenie Logo' className='top-left-logo'></img></Link>
            <div className="adminlogin-container">
                <img src={logoImage} className='loginuser' alt='UserImage'></img>
                <h2>Admin Login</h2>
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
                <Link to='/adminhome'>
                <img src={loginButton} alt='Log in' className='loginbutton'></img>
                </Link>
            </div>
        </div>
    );
};

export default AdminLogin;
