import { useAppContext } from '../appContext'

const ResetGame = () => {
  const { resetAll } = useAppContext()

  return (
    <div>
      <button onClick={resetAll}>New Game</button>
    </div>
  )
}

export default ResetGame
