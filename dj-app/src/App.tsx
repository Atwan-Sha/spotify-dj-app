import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQBYqvXPeiS2Sp4Ob325cE48g24vptx7iLNyctgzk3oTZ9hq1pmhimkDgBYDeLX2Q8f7BsAv_L-FzlikyGEv6YDAZLbi4OomTYY2mcDQvPFI9TUC0KeAE5hxZHFql7uuoJWmTQMkmFCdAjKkdav1NGea8YrF1XtNZanPFsYyQNXbRdCKgwII9lMlKIlQKke8zFq7iqjQIR5knnct8dQQcu9tkkCDKmI329I0Xk-9'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
