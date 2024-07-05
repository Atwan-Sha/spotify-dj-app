import { useState } from 'react'
import './css/App.css'
import TestComp from './TestComp.tsx'

const App = () => {
  const [count, setCount] = useState(0)
  let str = "test prop"

  return (
    <>
      <h1>DJ App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <TestComp prop1={str} prop2={count}/>
    </>
  )
}

export default App
