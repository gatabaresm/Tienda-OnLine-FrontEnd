import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const head = ReactDOM.createRoot(document.getElementById('head'));
head.render(<AppHeader name="Mi Tiendita"/>); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const foot = ReactDOM.createRoot(document.getElementById('foot'));
foot.render(<AppFooter name="Dirección, teléfono, Redes Sociales"/>); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
