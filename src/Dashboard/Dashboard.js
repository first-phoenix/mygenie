import React from 'react';
import './Dashboard.css';
import userAvatar from '../Assets/WelcomeAvatar.jpg'

function Dashboard() {
  return (
    <div className='dashboardwrapper'>
      {/* Avatar image */}
      <img src={userAvatar} alt="Avatar" />

      <div>
        <h2>Jane Johnson</h2>
        <p>Plant Manager</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Selected</th>
          </tr>
        </thead>
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
