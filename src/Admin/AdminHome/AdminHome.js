import React from 'react';
import './AdminHome.css';
import { Link } from 'react-router-dom';
import accentureLogo from '../../Assets/Accenture_Logo.png'; // Importing accenture logo
import logoImage from '../../Assets/logo.jpg';

const AdminHome = () => {
    return (
        <div className='admin-home'>
            {/* Adding accenture logo to the top left corner */}
            <Link to='/adminlogin'><img src={accentureLogo} alt='Accenture Logo' className='top-right-logo'></img></Link>
            {/* Adding abc logo to the top right corner */}
            <Link to='/'><img src={logoImage} alt='Mygenie Logo' className='top-left-logo'></img></Link>
            <h2 className='adminhomeheader'>Manage Your Roles</h2>
            <div className='adminroletile adminroletile1'>
                <Link to='/adminroles'><h2>Configure Roles</h2></Link>
            </div>
            <div className='adminroletile adminroletile2'>
                <Link to='/adminroles'><h2>Configure Data Sources</h2></Link>
            </div>
        </div>
    );
};

export default AdminHome;
