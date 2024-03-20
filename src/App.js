import React, { useState, useEffect } from 'react';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import MainPage from './MainPage/MainPage';
import Login from './Login/Login';
import LoadingPage from './LoadingPage/LoadingPage';
import Welcome from './Welcome/Welcome';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <MainPage />
      )}
    </div>
  );
}

export default App;