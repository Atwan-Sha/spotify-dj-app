import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQBVM2biY56JDNklwLYJvv8wulsbFHdvaT2OoMb-qCxw6uhcn6-txriu5r0BywVVIDshKGyJp6CXcKlbY-bL4YBw-xjx_j-7xjD9vvuJv-XWt6e-GJDQooifaxvAfuUHFw6d4cDRm8emTslELKZmS62h7sCaqxSP6tsxU07VbZXchG6iHvY8wPJdwfJnD_-PwKnrODIZrycu8Tmtyv-ekFHIJgdxwwS9CP7LelT3'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
