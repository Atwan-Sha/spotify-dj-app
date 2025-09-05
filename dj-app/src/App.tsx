import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQAup0-ULXzvt9YOn8KdAs1_59aHMy734JLn4glBYyRaCE4MX3sHou-VzVx2OfEerBk5vSVMb6c16J7UtjIESMZf4razok1P6VGavc2RFG2R7nd1F531Yjv_6lMqYZ6uqGPs-hmxIZik46XOCflXzSaoVFHtOShp8PW_WklPygDIwFs_sesu2sL3l4caR2s8eB1St12zZnIl8h4dZkAu0vmwuWqUYKN6D-lQXzJ5LzYMgkUt'
  )

  return (
    <>
      <PlaylistContainer token={token} />
      <Player token={token} />
    </>
  )
}
