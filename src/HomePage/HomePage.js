import React from 'react';
import './HomePage.css'; // Importing the CSS file for styling
import logo from '../Assets/logo.jpg'; // Importing the logo
import sampleImage from '../Assets/chatbotbgright.png'; // Importing sample image
import { Link } from 'react-router-dom';
import homepagecontent1 from '../Assets/HomePageContent1.png';
import homepagecontent2 from '../Assets/HomePageContent2.png';

const HomePage = () => {
    return (
        <div className="home-wrapper">
            {/* Logo at the top left corner */}
            <img src={logo} alt="Logo" className="logo" />

            {/* Main content */}
            <div className="main-content">
                {/* Left section */}
                <div className="left-section">
                    <h1 className='site-heading'>Introducing myGenie®</h1>
                    <h3 className='site-sub-heading'>Unleashing human potential through next generation technologies</h3>
                    <p className='site-description'>In the dynamic landscape of modern industry, staying ahead of the curve requires more than just intuition – it demands actionable insights driven by data and powered by cutting-edge artificial intelligence. Enter Gen AI, the next-generation platform tailored specifically for industry managers and directors seeking to optimize operations, enhance decision-making, and drive sustainable growth. Gen : generative ai myGenie provides an</p>
                    <Link to='/login'><button className='launch-genie-button'>Launch myGenie®</button></Link>
                </div>

                {/* Right section */}
                <div className="right-section">
                    <img src={sampleImage} alt="Sample" className='right-image-bg' />
                </div>
            </div>

            {/* Video section */}
            <div className="video-section">
                {/* Description for Video 1 */}
                <div className='home-video-1'>
                    {/* <p>Description for Video 1</p> */}
                    {/* Video 1 */}
                    <iframe width='500px' height='250px'  src="https://www.youtube.com/embed/I5ekVWjhVvY?si=EzW3GVj_qA1_SJiS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    
                </div>

                {/* Description for Video 2 */}
                <div className='home-video-2'>
                    {/* <p>Description for Video 2</p> */}
                    {/* Video 2 */}
                    <iframe width='500px100vw' height='250px' src="https://www.youtube.com/embed/P7G2eMKP7fg?si=-Efu3w0UHyDQVR47" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Three divs with descriptions */}
            <div className="three-divs">
                <div>   
                    <img src={homepagecontent1} alt='content1' className='homepage-content-1'></img>
                </div>
                <div>
                    <img src={homepagecontent2} alt='content2' className='homepage-content-2'></img>
                </div>
                <div className='footer-homepage'>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
