import { useState } from 'react'
import './css/App.css'
import TestComp from './testing/TestComp.tsx'
import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  // const [count, setCount] = useState(0)
  const [token, setToken] = useState(
    'BQAxyXhMaS-wQbHr8aYKktcQash8855V8fU3aoLGZ4D0IMzCtwV4rNoydl00Sm4wxy5335JqnAlKBTJ0yNSLuSkf2w1YDBy2Nk3cUaJHrJvC2Xwos4lUHJH7j64OEoDp3Hk3GJ-yLjFv-hZF_cAONoKhL4oMq9mpMBp6WylR7i_5Tf5aedUQfS_LiCvMOQHQneF7KuM3B_SOoQ'
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
