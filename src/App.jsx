
import { useState } from 'react'
import './App.css'
import User from './User'
function App() {

  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>Code step by step</h1>
      <h1>Counter val: {counter}</h1>
      <User />
      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter Value
      </button>
    </>
  )
}

export default App
