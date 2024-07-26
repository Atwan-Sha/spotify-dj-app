import { useState } from 'react'
import './css/App.css'
import TestComp from './testing/TestComp.tsx'
import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  // const [count, setCount] = useState(0)
  const [token, setToken] = useState(
    'BQCvz9LR0HhIePnDtOhpDss1VZiWeXxZlStKL3G-FA9EUQ253exmfVDoiw3v9iFYczBY5Pxt627dUe0s4qtfiq7dYGbNpogJICzGgzgv1k-rbSFCHcMgJwMMJ3CI5rs6UwmgGysZbjPhtk-G0_QZquFTAGSQE1UYrpXzy4G4vWD7PIsWfEV675gRm5o8oYthya3rdJ-kuMF1zA'
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
