import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import './App.css';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="dashboard">
          <Dashboard />
        </div>
        <div className="chatbot">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
}

export default App;