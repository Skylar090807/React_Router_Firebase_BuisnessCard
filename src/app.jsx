import React from 'react'
import styles from './app.module.css'
import Login from './components/login/login'
import Maker from './components/maker/maker'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// App은 index에서 쓰이고 있다.
function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={<Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
