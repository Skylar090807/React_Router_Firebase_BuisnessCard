import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css' // PostCSS
import App from './app'
import reportWebVitals from './reportWebVitals'
import { firebaseApp } from './service/firebase'
import AuthService from './service/auth_service' // Dependency Injection

// Dependency Injection
const authService = new AuthService(firebaseApp)

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
