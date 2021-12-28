import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Footer from '../footer/footer'
import Header from '../header/header'
import Preview from '../preview/preview'
import styles from './maker.module.css'

// Maker는 APP에서 쓰이고 있다.
const Maker = ({ FileInput, authService, cardRepository }) => {
  const [cards, setCards] = useState({
    // Card Preview test
    // 1: {
    //   id: '1',
    //   name: 'Skylar',
    //   company: 'PurpleSeed',
    //   theme: 'dark',
    //   title: 'FrontEnd Developer',
    //   email: 'skylar@purpleseed.co.kr',
    //   message: 'Never say Never',
    //   fileName: 'skylar',
    //   fileURL: '',
    // },
    // 2: {
    //   id: '2',
    //   name: 'Skylar2',
    //   company: 'PurpleSeed',
    //   theme: 'light',
    //   title: 'FrontEnd Developer',
    //   email: 'skylar@purpleseed.co.kr',
    //   message: 'Never say Never',
    //   fileName: 'skylar',
    //   fileURL: '',
    // },
    // 3: {
    //   id: '3',
    //   name: 'Skylar3',
    //   company: 'PurpleSeed',
    //   theme: 'colorful',
    //   title: 'FrontEnd Developer',
    //   email: 'skylar@purpleseed.co.kr',
    //   message: 'Never say Never',
    //   fileName: 'skylar',
    //   fileURL: '',
    // },
  })
  const navigate = useNavigate()
  const navigateState = useNavigate().state
  const [userID, setUserID] = useState(navigateState && navigateState.id)

  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    if (!userID) {
    }
  }, [userID, cardRepository])

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserID(user.uid)
      } else {
        navigate('/')
      }
    })
  })

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards }
      updated[card.id] = card
      return updated
    })
    cardRepository.saveCard(userID, card) //CradRepository saveCard
  }

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards }
      delete updated[card.id]
      return updated
    })
    cardRepository.removeCard(userID, card)
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker
