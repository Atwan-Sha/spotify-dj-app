import { useState } from 'react'
import './css/App.css'
import TestComp from './testing/TestComp.tsx'
import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  // const [count, setCount] = useState(0)
  const [token, setToken] = useState(
    'BQD_p9HlvskiEjwEvlk2aIEkjcvoaLKGRyiLlIqBBzNagUrkb4eUZC7KlNZ9qWQfluYv19e-B0k2Fod5IH7svfZoWiBQCpNxdp9MArEiJCH8y8libQ3vmJ8_e3PHRnQXJJ7rrh9HCwXtPf6BRnnnVSR0guPRi1HusKbmojNBd18OHk6oSGWD7Ay4mkNK9-eMqKgfsr8ESWjsuQ'
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
