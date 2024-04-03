import React from 'react';
import './AdminRoles2.css';
import accentureLogo from '../../Assets/Accenture_Logo.png'; // Importing accenture logo
import logoImage from '../../Assets/logo.jpg';
import { Link } from 'react-router-dom';


const AdminRoles2 = () => {
    return (
        <div className='admin-roles'>
            {/* Adding accenture logo to the top left corner */}
            <Link to='/adminlogin'><img src={accentureLogo} alt='Accenture Logo' className='top-right-logo'></img></Link>
            {/* Adding abc logo to the top right corner */}
            <Link to='/'><img src={logoImage} alt='Mygenie Logo' className='top-left-logo'></img></Link>
            <div className='header'>
                <h1>Roles</h1>
                <Link to='/createrole'><button className='create-button'>Create New Role</button></Link>
            </div>
            <div className='search-box'>
                <input type='text' placeholder='Search...' />
            </div>
            <div className='roletiles'>
                <div className='role-tile role1'><Link to='/roleinsights'><h2>Compliance Manager</h2></Link></div>
                <div className='role-tile role2'><Link to='/roleinsights'><h2>Labelling Manager</h2></Link></div>
                <div className='role-tile role3'><Link to='/roleinsights'><h2>Packaging Manager</h2></Link></div>
                <div className='role-tile role4'><Link to='/roleinsights'><h2>Supply Chain Manager</h2></Link></div>
                {/* <div className='role-tile role5'>Role 5</div> */}
            </div>
        </div>
    );
};

export default AdminRoles2;
