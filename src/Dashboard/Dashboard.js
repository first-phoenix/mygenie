import React from 'react';
import './Dashboard.css';
import userAvatar from '../Assets/WelcomeAvatar.jpg'
import logoImage from '../Assets/logo.jpg';
import accentureLogo from '../Assets/Accenture_Logo.png'; // Importing accenture logo
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='dashboardwrapper'>
      {/* Avatar image */}
            {/* Adding accenture logo to the top left corner */}
            <Link to='/adminlogin'><img src={accentureLogo} alt='Accenture Logo' className='top-right-logo'></img></Link>
            {/* Adding abc logo to the top right corner */}
            <Link to='/'><img src={logoImage} alt='Mygenie Logo' className='top-left-logo'></img></Link>      
            <img src={userAvatar} alt="Avatar" className='avatarImage' />

      <div>
        <h2>Jane Johnson</h2>
        <p>Director of Packaging</p>
      </div>
      <div className='tableHeader'>
        <h3>Company Internal / External Data Sources</h3>
      </div>

      <table>
        {/* <thead>
          <tr>
            <th>Department</th>
            <th>Selected</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>Research and Development</td>
            <td>
              <input type="checkbox" defaultChecked />
            </td>
          </tr>
          <tr>
            <td>Quality Control</td>
            <td>
              <input type="checkbox"  />
            </td>
          </tr>
          <tr>
            <td>Supply Chain</td>
            <td>
              <input type="checkbox" defaultChecked />
            </td>
          </tr>
          <tr>
            <td>Portfolio</td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Marketing</td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Regulatory Compliances</td>
            <td>
              <input type="checkbox" defaultChecked />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
