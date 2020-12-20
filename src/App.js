import Checkbox from './components/Checkbox'
import Card from './components/Card'
import './App.sass'

const App = () => {
  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Our pricing</h1>
      <div className="payment-switcher">
        <span className="payment-title">Annually</span>
        <Checkbox />
        <span className="payment-title">Monthly</span>
      </div>
      <div className="cards-wrapper">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App