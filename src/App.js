import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import 'react-chatbot-kit/build/main.css';
import './App.css';
import MainPage from './MainPage/MainPage';
import Login from './Login/Login';
import LoadingPage from './LoadingPage/LoadingPage';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';
import LandingPage from './StartPage/LandingPage'
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import AdminHome from './Admin/AdminHome/AdminHome';
import AdminRoles from './Admin/AdminRoles/AdminRoles';
import CreateRole from './Admin/AdminCreateRole/CreateRole';
import AdminRoles2 from './Admin/AdminRoles2/AdminRoles2';
import RoleInsights from './Admin/RoleInsights/RoleInsights';
import HomePage from './HomePage/HomePage';

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
        <HashRouter>
          <Routes>
            <Route exact path="/cgsgennie" Component={HomePage} />
            <Route exact path="/" Component={HomePage} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="welcome" Component={Welcome} />
            <Route exact path="home" Component={Home} />
            <Route exact path="chathere" Component={MainPage} />
            <Route exact path="landingpage" Component={LandingPage} />
            <Route exact path="adminlogin" Component={AdminLogin} />
            <Route exact path="adminhome" Component={AdminHome} />
            <Route exact path="adminroles" Component={AdminRoles} />
            <Route exact path="createrole" Component={CreateRole} />
            <Route exact path="adminroles2" Component={AdminRoles2} />
            <Route exact path="roleinsights" Component={RoleInsights} />
          </Routes>
        </HashRouter>
      )}
    </div>
  );
}

export default App;