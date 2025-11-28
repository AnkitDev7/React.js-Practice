import React, { useState } from 'react'

export const App = () => {

  const [first, setfirst] = useState(0);
  function Counter1() {
    if (first === 'value can not be decrease') {
      setfirst(0)
    } else {
      setfirst(first + 1);
    }
  }

  function remove() {
    if (first > 0) {
      setfirst(first - 1)
    }
    else if (first == 0) {
      setfirst('value can not be decrease')
    } else if (first === 'value can not be decrease') {
      setfirst(0)
    }
    else {
      setfirst(first - 1);
    }
  }

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>Counter value:- {first}</h2>

      <button onClick={Counter1}>Add Value</button>
      <br />
      <button onClick={remove}>Substract  value</button>
    </>
  )
}
