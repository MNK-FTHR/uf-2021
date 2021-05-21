import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from "axios";

//pages
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import News from './pages/news/News';
import Scoreboard from './pages/scoreboard/Scoreboard';
import About from './pages/about/About';
import Home from './pages/Home';
//protected
import Dashboard from './pages/restricted/admin/Dashboard'
import Inscription from './pages/restricted/inscription/Inscription'
import Jeux from './pages/restricted/jeux/Jeux'
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
//components
import Unauthorized from './components/Unauthorized/Unauthorized';
import TopNav from './components/TopNav/TopNav';
import Profile from './pages/restricted/profile/Profile';

function App() {
  Axios.defaults.withCredentials = true;
  const [loginStatus, setLoginStatus] = useState(false);
  const [client, setClient] = useState({});
  //login
  const [email, setEmail] = useState("");
  const [mot_de_passe, setMot_de_passe] = useState("");
  const [loginAlert, setLoginAlert] = useState(false);
  //login
  const [registerStatus, setRegisterStatus] = useState(true);
  const [adminStatus, setAdminStatus] = useState(false);
  useEffect(() => {
    Axios.get("http://localhost:5000/clients/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(true);
        setClient(response.data.client[0])
        setAdminStatus(response.data.client[0].admin);
      }else{
        setLoginStatus(false);
        setAdminStatus(false);
        setClient({})
      }
    });
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/clients/login", {
      email: email,
      mot_de_passe: mot_de_passe,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginAlert(true);
        setLoginStatus(false);
      } else {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        setLoginAlert(false);
        setLoginStatus(true);
        setClient(response.data.result[0])
        setAdminStatus(response.data.result[0].admin);
      }
    });
  };
  const handleLogout = e => {
    e.preventDefault();
    setLoginStatus(false);
    setAdminStatus(false);
    setClient({})
  }

  const userAuthenticated = () =>{
    Axios.get("http://localhost:5000/isClientAuth", {
      headers:{
        "x-access-token": localStorage.getItem("token")
      }
    }).then((response) => {
      console.log(response);
    });
  }
  const news = [
    {id:1, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:2, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:3, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:4, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:5, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:6, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:7, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:8, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:9, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:10, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:11, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:12, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:13, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:14, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:15, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
  ]
  const challenges = [
    {id:1, content:"Description du Challenge 1", points: 5},
    {id:2, content:"Description du Challenge 2", points: 10},
    {id:3, content:"Description du Challenge 3", points: 10},
  ]
  const about = [
    {id:1, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dolor a nulla facilisis accumsan. Proin tincidunt dolor vitae diam consectetur"},
    {id:2, content:"ac suscipit tellus tincidunt. Nullam iaculis tincidunt leo. Nulla facilisi. Quisque hendrerit fringilla urna at sagittis. Aenean ullamcorper orci ac luctus consectetur"},
  ]
  return (
    <div className="App">
      <Router>
        <header>
          <TopNav loginStatus={loginStatus} admin={adminStatus} handleLogout={handleLogout}/>
        </header>
        {/* Main routes */}
        <Route exact path='/' render={
          props => <Home {...props} news={news} about={about} loginStatus={loginStatus.toString()}
            handleLogin={handleLogin} />} />
        <Route exact path='/about' handleLogin={handleLogin} render={
          props => <About {...props} about={about} loginStatus={loginStatus.toString()}
            handleLogin={handleLogin} />} />
        <Route exact path='/news' handleLogin={handleLogin} render={
          props => <News {...props} news={news} loginStatus={loginStatus.toString()}
            handleLogin={handleLogin} />} />
        <Route exact path='/scoreboard' handleLogin={handleLogin} render={
          props => <Scoreboard {...props} loginStatus={loginStatus.toString()}
            handleLogin={handleLogin} />} />
        {/* Register and login */}
        <Route exact path='/register' handleLogin={handleLogin} render={
          props => <Register {...props} loginStatus={loginStatus.toString()}
            />} />
        {
          !loginStatus&&
          <Route exact path='/login' handleLogin={handleLogin} render={
            props => <Login {...props}
                     loginStatus={loginStatus.toString()}
                     loginAlert={loginAlert}
                     emailChange={(e) => {
                      setEmail(e.target.value);
                     }} 
                     passwordChange={(e) => {
                        setMot_de_passe(e.target.value);
                     }} 
                     handleLogin={handleLogin}  />} 
                     />
        }

        {/* Secured routes */}
        <AdminRoute exact path='/dashboard' admin={adminStatus} component={Dashboard} />
        <ProtectedRoute exact path='/profile' loginStatus={loginStatus} client={client} component={Profile} />
        <ProtectedRoute exact path='/inscription' loginStatus={loginStatus} component={Inscription} />
        <ProtectedRoute exact path='/jeux' loginStatus={loginStatus} challenges={challenges} client={client} component={Jeux} />
        <Route exact path='/unauthorized' component={Unauthorized} />
      </Router>
    </div>
  );
}

export default App;