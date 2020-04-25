import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';
import NavBar from './Header/Navbar';
import Landing from './Header/Landing';


const firebase=require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAvKQThlB3acQEOhZF33C_zMGD7DVbn3qw",
    authDomain: "im-tutotial-363a3.firebaseapp.com",
    databaseURL: "https://im-tutotial-363a3.firebaseio.com",
    projectId: "im-tutotial-363a3",
    storageBucket: "im-tutotial-363a3.appspot.com",
    messagingSenderId: "1038427343126",
    appId: "1:1038427343126:web:8fe1834bc4c98ba93ae837",
    measurementId: "G-TDT35ZQZZ6"
});
const routing=( 
  <Router>
     <NavBar/>
     <Route exact path='/' component={Landing} />

     <div id="routing-container">
      <Route path='/dashboard' component={DashboardComponent}></Route>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
    </div>
  </Router>
);
ReactDOM.render(
 routing,
  document.getElementById('root')
);
serviceWorker.unregister();
