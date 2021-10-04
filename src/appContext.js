import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const INITIAL_ENERGY = 3
const ENERGY_PER_TURN = 2
const MIN_ENERGY = 0
const MAX_ENERGY = 10

const INITIAL_CARDS = 6
const CARDS_PER_DRAW = 3
const MAX_CARDS = 12

const INITIAL_USAGE = [
  [false, false],
  [false, false],
  [false, false],
  [false, false],

  [false, false],
  [false, false],
  [false, false],
  [false, false],

  [false, false],
  [false, false],
  [false, false],
  [false, false],
]

const INITIAL_AXIES_ALIVE = [true, true, true]

export const Provider = ({ children }) => {
  const [energyCount, setEnergyCount] = useState(INITIAL_ENERGY)
  const increaseEnergyCount = () =>
    setEnergyCount(energyCount !== MAX_ENERGY ? energyCount + 1 : MAX_ENERGY)
  const decreaseEnergyCount = () =>
    setEnergyCount(energyCount !== MIN_ENERGY ? energyCount - 1 : MIN_ENERGY)

  const [cardCount, setCardCount] = useState(INITIAL_CARDS)

  const [amountToDiscard, setAmountToDiscard] = useState(0)
  useEffect(() => {
    setAmountToDiscard(
      cardCount + CARDS_PER_DRAW > MAX_CARDS
        ? cardCount + CARDS_PER_DRAW - MAX_CARDS
        : 0
    )
  }, [cardCount])

  const [usedCards, setUsedCards] = useState(INITIAL_USAGE)
  const toggleCard = (cardIndex, repeatIndex) => {
    if (cardCount === 0) return

    const usedCardsObj = { ...usedCards }
    const cardToModifyObj = { ...usedCardsObj[cardIndex] }

    setUsedCards(
      Object.values({
        ...usedCardsObj,
        [cardIndex]: Object.values({
          ...cardToModifyObj,
          [repeatIndex]: !cardToModifyObj[repeatIndex],
        }),
      })
    )

    setCardCount(
      usedCards[cardIndex][repeatIndex] ? cardCount + 1 : cardCount - 1
    )
  }

  const [round, setRound] = useState(1)

  const [axiesAlive, setAxiesAlive] = useState(INITIAL_AXIES_ALIVE)
  const toggleAxieAlive = (idx) => {
    const axiesAliveObj = { ...axiesAlive }

    setAxiesAlive(
      Object.values({
        ...axiesAliveObj,
        [idx]: !axiesAlive[idx],
      })
    )
  }

  const endRound = () => {
    setCardCount(
      cardCount + CARDS_PER_DRAW < MAX_CARDS
        ? cardCount + CARDS_PER_DRAW
        : MAX_CARDS
    )

    setEnergyCount(
      energyCount + ENERGY_PER_TURN < MAX_ENERGY
        ? energyCount + ENERGY_PER_TURN
        : MAX_ENERGY
    )

    setRound(round + 1)
  }

  const resetCards = (axieIdx) => {
    const usedCardsObj = { ...usedCards }

    setUsedCards(
      Object.values({
        ...usedCardsObj,
        [axieIdx * 4 + 0]: [false, false],
        [axieIdx * 4 + 1]: [false, false],
        [axieIdx * 4 + 2]: [false, false],
        [axieIdx * 4 + 3]: [false, false],
      })
    )
  }

  const resetAll = () => {
    setEnergyCount(INITIAL_ENERGY)
    setCardCount(INITIAL_CARDS)
    setAmountToDiscard(0)
    setUsedCards(INITIAL_USAGE)
    setRound(1)
    setAxiesAlive(INITIAL_AXIES_ALIVE)
  }

  return (
    <AppContext.Provider
      value={{
        energyCount,
        increaseEnergyCount,
        decreaseEnergyCount,
        cardCount,
        amountToDiscard,
        usedCards,
        toggleCard,
        round,
        endRound,
        axiesAlive,
        toggleAxieAlive,
        resetCards,
        resetAll,
        MAX_ENERGY,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
