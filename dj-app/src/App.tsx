import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQDRoneuJ12a1oXb60mvy2koDWdEOyHmtkV52NuvruBFXn4Wtjm7HRb0-UXtPnWF5yCHuj-Tnu7_3sMABnPp_htO_aY-6y7i0-g5srj2Hjpj3ilut2pOHkIjGDanWTO6l9WO5hROiHLC8vkZ6JGAaiODvymYgVwWj88yZ6g3GYUXLN3JKpF15xxIuyEEeSQ3w55Ou7pQb4BugUnHT6Iwjjz9yDtODlOtjKwICjpMoLQK283t'
  )

  return (
    <>
      <PlaylistContainer token={token} />
      <Player token={token} />
    </>
  )
}
