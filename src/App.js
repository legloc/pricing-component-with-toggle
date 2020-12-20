import Checkbox from './components/Checkbox'
import Card from './components/Card'
import './App.sass'

const App = () => {
  const cards = [{
    title: 'Basic',
    price: '19.99',
    list: [ '500 GB Storage', '2 Users Allowed', 'Send up to 3 GB' ],
    active: false
  }, {
    title: 'Professional',
    price: '24.99',
    list: [ '1 TB Storage', '5 Users Allowed', 'Send up to 10 GB' ],
    active: true
  }, {
    title: 'Master',
    price: '39.99',
    list: [ '2 TB Storage', '10 Users Allowed', 'Send up to 20 GB' ],
    active: false
  }]

  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Our pricing</h1>
      <div className="payment-switcher">
        <span className="payment-title">Annually</span>
        <Checkbox />
        <span className="payment-title">Monthly</span>
      </div>
      <div className="cards-wrapper">
        { cards.map(card => (
          <Card key={ card.title } title={ card.title } price={ card.price } list={ card.list } active={ card.active } />
        )) }
      </div>
    </div>
  )
}

export default App