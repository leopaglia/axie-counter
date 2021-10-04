import { useAppContext } from '../appContext'
import './EnergyCounter.css'

const EnergyCounter = () => {
  const { energyCount, increaseEnergyCount, decreaseEnergyCount, MAX_ENERGY } =
    useAppContext()

  return (
    <div className="energy-counter">
      <img height="60" src="img/energy.png" alt="energy" />

      <h3>
        {energyCount} / {MAX_ENERGY}
      </h3>

      <div>
        <button onClick={decreaseEnergyCount}>-</button>
        <button onClick={increaseEnergyCount}>+</button>
      </div>
    </div>
  )
}

export default EnergyCounter
