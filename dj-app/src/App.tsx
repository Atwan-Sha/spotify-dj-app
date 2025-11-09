import { useState } from 'react'
import { createContext } from 'react';
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
// import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export const UserContext = createContext('')

export default function App() {

  const [token, setToken] = useState(
    'BQDxNTvVK_RQ-QNvqUtmdpoD9VuLNZirOWW7_-3R8s6ULu4f4CYpFgp5ifRfu_QAhQ8BVqdHGh4OPQNVirvjCIFvfvQ4dT6tV0mZq2TpMfVG9dlj0wXDlfKJ665VAt7TtxJh_0cdyybpymY-srU3gztV62UnvQTt5YBsIr4UmyVQT3MGBDMGD5ERU4lDDLI3apsDFGJvzTwxneqLY3kKuunazReH7p5cqoSBSGa0AKuJlcWgS0qU'
  )

  return (
    <>
      <UserContext.Provider value={token}>
        <PlaylistContainer />
        <Player token={token} />
      </UserContext.Provider>
    </>
  )
}
