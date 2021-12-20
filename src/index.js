import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAsZx4XJSZqT4mpMbnQPwuQHIBqhJZAfM",
  authDomain: "info350-harassment.firebaseapp.com",
  projectId: "info350-harassment",
  storageBucket: "info350-harassment.appspot.com",
  messagingSenderId: "993813478282",
  appId: "1:993813478282:web:bb81bce9b8ab5aa6daa673",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);








ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
