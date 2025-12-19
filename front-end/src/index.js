import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthLogic from './service/authLogic';
import app from './service/firebase';
// AuthLogic객체 생성하기
const authLLogic = new AuthLogic(app)
console.log(authLLogic)
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

