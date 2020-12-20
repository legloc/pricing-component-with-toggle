const Card = ({ title, price, list, active }) => {
  return (
    <div className={ `card ${ active && 'active' }` }>
      <h4 className="card-title">{ title }</h4>
      <h1 className="card-price">
        <span className="price-sign">$</span>
        <span className="price-value">{ price }</span>
      </h1>
      <ul className="list">
        { list.map(item => (
          <li key={ item } className="list-item">{ item }</li>
        )) }
      </ul>
      <button className="card-btn">Learn more</button>
    </div>
  )
}

export default Card