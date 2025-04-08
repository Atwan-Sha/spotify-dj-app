import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQC8ZJpXWY_wEzOu4OZIcS8CE1IUkbE8sI6lqtEx4Wv4FNoKnjNj1JjH8p-mXIy8s2OmZSr0xX2aIEbCuP7jhNSQEvmxyDWQ_nWl2fN-RwD19v5fZv6JLdK_RGqFJ0OLT-D2rXFpxyu6iT2qgU8mAhQE7tWwr1hv6V8Bgnv4AIz2ITm40aKbcZQQ8DyEVYSVqE96s6x0v7qeNnglyOH9dQpsppHbOKYsMgr0XPV5'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
