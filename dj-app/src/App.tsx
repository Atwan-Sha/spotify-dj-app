import { useState } from 'react'
import './css/App.css'
import TestComp from './testing/TestComp.tsx'
import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  // const [count, setCount] = useState(0)
  const [token, setToken] = useState(
    'BQCGySD2ZqH5NIxhQ7wJD9_vYpUAWFn29ljHN3Mt9uNqp_Gwp0C-uBMkGF7LZaM-2a6FlAeGkawsQeT1ENL9jNl-BljSGinqK-6_dYMUIKrm4nXm2dgJS2HdSpmaZPeRINtZQLMdOQ04GXWYKpw7Maluju8wb15rIf6vgstm0J_ZwOH09pnV74DL4W_AuBNVfu9z4HYw'
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
