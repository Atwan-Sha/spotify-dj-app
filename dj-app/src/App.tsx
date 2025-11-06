import { useState } from 'react'
import { createContext, useContext } from 'react';
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
// import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export const UserContext = createContext('')

export default function App() {

  const [token, setToken] = useState(
    'BQAsmonDy1qsrd9-mQKCDZQLNpa5xllZ2fjo0IQn6SEtlx0ION7LhtSLuZSlv2YF9yB1wjLuxG1WbyhuycyFxYN9ygwQJWLiaie0NSRnIoorSs8Txfr0t6EMmaGtvGKOjrfgmL9qjI4q1GNdRUn7f7iJ1ErdKXEG28tLPdKaFfV5wQzvZxHwC9KjVCMxCrbOS6SPukDAv0SQCB5x-NNBy6IGv34dXvjzAiy1IrBnL_L21O57zDPm'
  )

  return (
    <>
      <UserContext.Provider value={token}>
        <PlaylistContainer token={token} />
        <Player token={token} />
      </UserContext.Provider>
    </>
  )
}
