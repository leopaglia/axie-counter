import { useAppContext } from '../appContext'
import './CardsCounter.css'

const CardsCounter = () => {
  const { cardCount, amountToDiscard } = useAppContext()

  return (
    <div className="cards-counter">
      <img height="60" src="img/cards.png" alt="card count" />
      <h3>x{cardCount}</h3>
      {!!amountToDiscard && (
        <small>discards {amountToDiscard} next round</small>
      )}
    </div>
  )
}

export default CardsCounter
