import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  
  const [token, setToken] = useState(
    'BQAy8kzbvlBOa33DrlR6ZoFHLmFbL7TjTPb0fmT2T6N_W88gVvvNlfIFp_WaMs9JHjC7qiX1kVybxSkaZkjH4Lr6uvH_zbFS1ygdYivNQLPTT1TsbyCmLnI7wqCzwNXedye0lbEVVJu1MNgBU3D_8JK5z3ivacFHTvIW2Ez1gHOcZVQTWJmg89X5axp-tndo3TnJ9QMRtetgVpvMF3t19txWb6EcfX1t0zmrzcU5Ekju43-s'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
