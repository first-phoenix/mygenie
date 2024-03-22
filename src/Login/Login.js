import React from 'react';
import './Login.css'; // Importing the CSS file for styling
import loginuser from '../Assets/login-user.png'
import loginButton from '../Assets/log-in.png'
import logoImage from '../Assets/logo.jpg';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className='login-wrapper'>
            <Link to='/'><img src={logoImage} alt='logo' className='logo'></img></Link>
            <div className="login-container">
                <img src={loginuser} className='loginuser' alt='UserImage'></img>
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
                        <option value="Manager">Manager</option>
                        <option value="Supervisor">Supervisor</option>
                    </select>
                </div>
                <Link to='/welcome'>
                <img src={loginButton} alt='Log in' className='loginbutton'></img>
                </Link>
            </div>
        </div>
    );
};

export default Login;
