import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC08bQgddIhChTJ4KlTEdO6Ze0QXzVoeq0",
  authDomain: "coderprueba1-53b8a.firebaseapp.com",
  projectId: "coderprueba1-53b8a",
  storageBucket: "coderprueba1-53b8a.appspot.com",
  messagingSenderId: "834751919239",
  appId: "1:834751919239:web:23ce96c0d0a73ab9a4b422",
  measurementId: "G-SJ8EHN8N7Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(analytics);
