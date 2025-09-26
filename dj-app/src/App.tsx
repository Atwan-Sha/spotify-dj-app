import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQDDdSq6LTK4ejLN3Zq_Il3hggzWcBBUtrMhZS7IZ4I3E2vVbjADLPnXf7RvZIJu1m0JRwnhOAHeh5KsqLEG99sblSSt0dHsbGussbuLAbJTLxSQxHTMLYp7xoJmguYQ7Gb0_E3x9VrcO96B1-bRQ97s2dV-S3onsFM1s0PzG0oUk3StzgpCyJKxtG38ci5CwcCD1XJXO-5IVWP78k2Iai7EWxAOkiiIugPW3kaEdk2edLfu'
  )

  return (
    <>
      <PlaylistContainer token={token} />
      <Player token={token} />
    </>
  )
}
