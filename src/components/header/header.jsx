import React from 'react'
import styles from './header.module.css'

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && ( //onLogout -> true for css
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/pawpink.png" alt="Cat's pink paw" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  )
}

export default Header
