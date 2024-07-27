import { useState } from 'react'
import './css/App.css'
import TestComp from './testing/TestComp.tsx'
import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  // const [count, setCount] = useState(0)
  const [token, setToken] = useState(
    'BQDzbyByUvp1T_4f4BjxZnQcBmXHhjlcu8CeJWoz-SREANwSyVIhhCoLpJDaNjfeZBbfr8j4TfEswb_6yo5KeDIIavqxu1f7yPiHzbS80Cg5o8fbwy-LLlpSqSP7a2U9NelM8aFXuiCn8naAimE3Dzm4JRL4G_DkKYiwNuvnGEYBKRDXSvbcwkHN-gxr6TNcGXF_r483M4ZNEw'
  )

  return (
    <>
      {/* <h1>DJ App</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      {/* <TestComp prop1={str} prop2={count} /> */}
      {/* <PlaybackTest token={token} /> */}
      <Player token={token} />
    </>
  )
}
