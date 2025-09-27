import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQACzwKcg_N5o-Bw_mSlD4iGhqKzByRzSZwoxNj5AyH9XUuKROkteNZf3EtU3K8mOMs7O6SKQkfCaoEr7uS6Q2KhvLvhAq6XVbCHz9ekvkTpr_Kn4qxf6nHAMzxVxzVRejA1sSOmvhIfIVy3u2QBivpkw3E7--eaj66t2A5amo3QwYj7cwuntQjazfYjCy3yPX2cjHdt-BPW0q5qDhsz0RF-RLx0xYqTkQk1Hs0Ig8Bpu4Tr'
  )

  return (
    <>
      <PlaylistContainer token={token} />
      <Player token={token} />
    </>
  )
}
