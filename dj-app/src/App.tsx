import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  
  const [token, setToken] = useState(
    'BQC1iW08CSDmMtBl0IJDOnJCkfvLKn95zsAY7uy1vjiQ79zuoChcrPovaeJYBg_wUHqZZYY-3Wvae8C5dTcFwt9Q0GoByiBsXYovPWcbF3vAbIgDnQBVnmXYGZy63xnSRTQby9etu4OQbsuQ-86kPTawq3BqSUT-R2h2izVaXK5HcgqMOszuVmxjFlZ97UBkFcCvgdOXj5cmgnMOBeifuzSPfpAUiop7u6CiNa9JeZt9LsUe'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
