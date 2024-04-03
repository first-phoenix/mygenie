import React from 'react';
import './RoleInsights.css';
import accentureLogo from '../../Assets/Accenture_Logo.png';
import logoImage from '../../Assets/logo.jpg';
import { Link } from 'react-router-dom';

const RoleInsights = () => {
    return (
        <div className='role-insights'>
            <Link to='/adminlogin'><img src={accentureLogo} alt='Accenture Logo' className='top-right-logo'></img></Link>
            <Link to='/'><img src={logoImage} alt='Mygenie Logo' className='top-left-logo' /></Link>
            <h2>Role Insights</h2>
            <div className='role-insights-content'>
                <div className='insight-item'>
                    <h3>Task Name:</h3>
                    <p>Optimize Inventory Management System</p>
                </div>
                <div className='insight-item'>
                    <h3>Task Description:</h3>
                    <p>The task is to optimize the inventory management system to ensure efficient stock levels and minimize excess inventory. This involves analyzing current inventory levels, forecasting demand, and implementing strategies to streamline inventory processes.</p>
                </div>
                <div className='insight-item'>
                    <h3>Data Source:</h3>
                    <p>Research and Development, Quality Control, Supply Chain, Marketing</p>
                </div>
                <div className='insight-item'>
                    <h3>Role Name:</h3>
                    <p>Supply Chain Manager</p>
                </div>
                <div className='insight-item'>
                    <h3>Role Description:</h3>
                    <p>The Supply Chain Manager is responsible for overseeing the end-to-end supply chain process, from procurement to distribution. This role involves coordinating with suppliers, manufacturers, and logistics partners to ensure timely delivery of goods while minimizing costs and maximizing efficiency.</p>
                </div>
                <div className='insight-item'>
                    <h3>Prompt:</h3>
                    <p>Develop a comprehensive plan to improve inventory turnover rate while maintaining adequate stock levels to meet customer demand. Consider factors such as lead times, supplier reliability, and demand variability in your analysis and recommendations.</p>
                </div>
            </div>
        </div>
    );
};

export default RoleInsights;
