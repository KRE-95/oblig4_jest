import { useState } from 'react'
import React from 'react'

export const Counter = () => {
    // lagre som useState og gir den startverdi 0
  const [count, setCount] = useState(0)

  // logic for increment an decrement
  const decrement = () => setCount(count => count - 1)
  const increment = () => setCount(count => count + 1)
  // restart 
  const rest = () => setCount(count => 0)



  return (
    <div>
      <p data-testid="paragraph">Count is: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={rest}>Reset</button>
    </div>
  )
}
