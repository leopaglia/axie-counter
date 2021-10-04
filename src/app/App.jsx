import CardsCounter from '../components/CardsCounter'
import CardsTable from '../components/CardsTable'
import EnergyCounter from '../components/EnergyCounter'
import ResetGame from '../components/ResetGame'
import RoundCounter from '../components/RoundCounter'
import './App.css'

const App = () => (
  <div className="App">
    <RoundCounter />
    <EnergyCounter />
    <hr />
    <CardsCounter />
    <CardsTable />
    <hr />
    <ResetGame />
  </div>
)

export default App
