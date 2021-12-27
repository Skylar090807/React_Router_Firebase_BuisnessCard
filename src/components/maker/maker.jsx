import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './maker.module.css'

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Skylar',
      company: 'PurpleSeed',
      theme: 'dark',
      title: 'FrontEnd Developer',
      email: 'skylar@purpleseed.co.kr',
      message: 'Never say Never',
      fileName: 'skylar',
      fileURL: '',
    },
    {
      id: '2',
      name: 'Skylar2',
      company: 'PurpleSeed',
      theme: 'light',
      title: 'FrontEnd Developer',
      email: 'skylar@purpleseed.co.kr',
      message: 'Never say Never',
      fileName: 'skylar',
      fileURL: '',
    },
    {
      id: '3',
      name: 'Skylar3',
      company: 'PurpleSeed',
      theme: 'colorful',
      title: 'FrontEnd Developer',
      email: 'skylar@purpleseed.co.kr',
      message: 'Never say Never',
      fileName: 'skylar',
      fileURL: '',
    },
  ])
  const navigate = useNavigate()
  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/')
      }
    })
  })

  const addCard = (card) => {
    const updated = [...cards, card]
    setCards(updated)
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker
