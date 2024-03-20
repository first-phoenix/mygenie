import React from 'react';
import './Login.css'; // Importing the CSS file for styling

const Login = () => {
    const handleLogin = () => {
        // Redirect to the second page
        window.location.href = '/secondpage';
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-group">
                <label>Email ID</label>
                <input type="text" placeholder="Enter your email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
                <label>Two factor authentication</label>
                <input type="text" placeholder="Enter authentication code" />
            </div>
            <div className="form-group">
                <label>Choose Role</label>
                <select>
                    <option value="Manager">Manager</option>
                    <option value="Supervisor">Supervisor</option>
                </select>
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
