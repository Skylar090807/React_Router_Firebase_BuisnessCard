import React from 'react'
import styles from './card.module.css'

const DEFAULT_IMAGE = '/images/cat.png'
const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } = card
  const url = fileURL || DEFAULT_IMAGE
  // src={fileURL || '/images/cat.png'}
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      {/* src={url} 오류. {process.env.PUBLIC_URL+'string'} <- 경로를 직접 쓸 때*/}
      <img className={styles.avatar} src={url} /*src={url} */ alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  )
}

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark
    case 'light':
      return styles.light
    case 'colorful':
      return styles.colorful
    default:
      throw new Error(`unknown theme: ${theme}`)
  }
}

export default Card
