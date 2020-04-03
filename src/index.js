import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(
  <div>hello world</div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
