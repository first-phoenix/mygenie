import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      {/* Avatar image */}
      <img src="https://cdn2.f-cdn.com/contestentries/1440473/30778261/5bdd02db9ff4c_thumb900.jpg" alt="Avatar" />

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
              <input type="checkbox" defaultChecked />
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
              <input type="checkbox" defaultChecked />
            </td>
          </tr>
          <tr>
            <td>Marketing</td>
            <td>
              <input type="checkbox" defaultChecked />
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
