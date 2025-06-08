import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQA_wc5PkGZYg2bMBibwmG3RX8pyox6GarkxVEJErz33r35zCSNe0rtBzq3M1-AlWWE_KLkxvgHZh2_U2DnndDeaEDTq-1dgeG2J0vMvXQx93ogVrwIzFKiT3s8pcNw3dZ8EEd5eJ9G9KbNNQjWfBZA2xESZmTiKYI4-Xk5dBqN3KBPtCWC-MrwPFHsP4SW6gDJEkIUmy8-x2wGhji1hIzRNNNFM5XLis-JLXzuXwAWRwcEa'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
