import { useState } from 'react'
import Checkbox from './components/Checkbox'
import Card from './components/Card'
import './App.sass'

const App = () => {
  const [monthlyPricing, setMonthlyPricing] = useState(false)

  const cards = [{
    title: 'Basic',
    price: [ '19.99', '199.99' ],
    list: [ '500 GB Storage', '2 Users Allowed', 'Send up to 3 GB' ],
    active: false
  }, {
    title: 'Professional',
    price: [ '24.99', '249.99' ],
    list: [ '1 TB Storage', '5 Users Allowed', 'Send up to 10 GB' ],
    active: true
  }, {
    title: 'Master',
    price: [ '39.99', '399.99' ],
    list: [ '2 TB Storage', '10 Users Allowed', 'Send up to 20 GB' ],
    active: false
  }]

  const handleChange = () => {
    setMonthlyPricing(!monthlyPricing)
  }

  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Our pricing</h1>
      <div className="payment-switcher">
        <span className="payment-title">Annually</span>
        <Checkbox checked={ monthlyPricing } onChange={ handleChange } />
        <span className="payment-title">Monthly</span>
      </div>
      <div className="cards-wrapper">
        { cards.map(card => (
          <Card key={ card.title } title={ card.title } price={ !monthlyPricing ? card.price[0] : card.price[1] } list={ card.list } active={ card.active } />
        )) }
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/legloc" rel="noreferrer" target="_blank">Aliiev Akhtem</a>.
      </div>
    </div>
  )
}

export default App