import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQA7cGslmah1oZkv44cn8xx22dOPZkpCbYPsu9jW-l3jZcTrDv6naRnDl2AApD6LhJiYq6oxzfBJDnZFUPoZdXSzRPfa0nLlqML_hxpKfKld9UiGNSwj71VEANYtAJfDwm2rayqH3TrmFLCg11bB1nh2osHRuCIpdCB-YMtIhcQjrqzB0q-vDy6aLnts0i20FY36bRwvFjg9WiUhJXX4D5X8igkhdv6_xM_QY-cjetAwbTze'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
