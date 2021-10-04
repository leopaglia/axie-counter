import { useAppContext } from '../appContext'

const RoundCounter = () => {
  const { round, endRound } = useAppContext()

  return (
    <div>
      <h2>Round {round}</h2>
      <button onClick={endRound}>Next round</button>
    </div>
  )
}

export default RoundCounter
