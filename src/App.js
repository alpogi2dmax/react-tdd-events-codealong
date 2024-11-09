import { useState } from "react";

function App() {

  const[pepproniIsChecked, setPepproniIsChecked] = useState(false)

  function togglePepperoni(e) {
    setPepproniIsChecked(e.target.checked)
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type='checkbox'
        id='pepperoni'
        checked={pepproniIsChecked}
        aria-checked={pepproniIsChecked}
        onChange={togglePepperoni}
      />
      <label htmlFor='pepperoni'>Add pepperoni</label>
      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepproniIsChecked ? <li>Pepperoni</li> : null}

      </ul>
    </div>
  )
}

export default App;
