import { useEffect, useState } from 'react'
import CardsCounter from '../components/CardsCounter'
import CardsTable from '../components/CardsTable'
import EnergyCounter from '../components/EnergyCounter'
import ResetGame from '../components/ResetGame'
import RoundCounter from '../components/RoundCounter'
import './App.css'

const launchedAsApp =
  window.matchMedia('(display-mode: standalone)').matches ||
  !!window.navigator.standalone

const App = () => {
  if (launchedAsApp) {
    window.resizeTo(540, 1250)
  }

  const [showInstallButton, setShowInstallButton] = useState(false)
  const [showOpenInAppButton, setShowOpenInAppButton] = useState(false)

  useEffect(() => {
    if ('getInstalledRelatedApps' in navigator) {
      navigator.getInstalledRelatedApps().then((installed) => {
        if (!launchedAsApp) {
          if (!installed.length) setShowInstallButton(true)
          else setShowOpenInAppButton(true)
        }
      })
    }
  }, [])

  return (
    <div className="app">
      {showInstallButton && <button>Install as App</button>}
      {showOpenInAppButton && <button>Open App</button>}
      <RoundCounter />
      <EnergyCounter />
      <hr />
      <CardsCounter />
      <CardsTable />
      <hr />
      <ResetGame />
    </div>
  )
}

export default App
