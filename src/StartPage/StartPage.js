import React from 'react';
import './StartPage.css';
import { Link } from 'react-router-dom';
import clickImage from '../Assets/click-here.png';



const StartPage = () => {
    return (
        <div className='start-page'>
            <div className='landingtile'>
                <p>Recent Activity - Baby Food Project</p>
                <Link to='/chathere'><img src={clickImage} alt='click here' className='clickImage'></img></Link>

                </div>
            <div className='landingtile'>
                <p>Start New Project</p>
                <Link to='/welcome'><img src={clickImage} alt='click here' className='clickImage'></img></Link>
            </div>
            <div className='landingtile'>
                <p>Learning Today</p>
                <img src={clickImage} alt='click here' className='clickImage'></img>

                </div>
            <div className='landingtile'>
                <p>Create New Research</p>
                <Link to='/welcome'><img src={clickImage} alt='click here' className='clickImage'></img></Link>

                </div>
            <div className='landingtile'>
                <p>My Organization Information</p>
                <img src={clickImage} alt='click here' className='clickImage'></img>

                </div>
        </div>
    );
};

export default StartPage;
