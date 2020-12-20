const Card = () => {
  return (
    <div className="card">
      <h4 className="card-title">Basic</h4>
      <h1 className="card-price">
        <span className="price-sign">$</span>
        <span className="price-value">249.99</span>
      </h1>
      <ul className="list">
        <li className="list-item">500 GB Storage</li>
        <li className="list-item">2 Users Allowed</li>
        <li className="list-item">Send up to 3 GB</li>
      </ul>
      <button className="card-btn">Learn more</button>
    </div>
  )
}

export default Card