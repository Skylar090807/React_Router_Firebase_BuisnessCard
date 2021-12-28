import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database'

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app)
  }
  syncCards(userID, onUpdate) {
    const query = ref(this.db, `${userID}/cards`)
    onValue(query, (snapshot) => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => off(query)
  }
  saveCard(userID, card) {
    set(ref(this.db, `${userID}/cards/${card.id}`), card)
  }

  removeCard(userID, card) {
    remove(ref(this.db, `${userID}/cards/${card.id}`))
  }
}

export default CardRepository
