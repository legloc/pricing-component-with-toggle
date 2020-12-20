const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="checkbox-wrapper">
      <input className="checkbox-input" type="checkbox" defaultChecked={ checked } onChange={ onChange }  />
      <div className="checkbox-slider"></div>
    </label>
  )
}

export default Checkbox