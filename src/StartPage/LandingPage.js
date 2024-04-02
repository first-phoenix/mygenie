import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import '../App.css';
import Dashboard from '../Dashboard/Dashboard';
import StartPage from './StartPage';

function MainPage() {
  return (
    <div className="App">
      <div className="container">
        <div className="dashboard">
          <Dashboard />
        </div>
        <div className="chatbot">
          <StartPage/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;