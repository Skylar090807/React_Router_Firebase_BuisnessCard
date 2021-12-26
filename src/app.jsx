import React from 'react'
import styles from './app.module.css'
import Login from './components/login/login'
import Maker from './components/maker/maker'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
