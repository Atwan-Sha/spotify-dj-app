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

  // const UserContext = createContext('')
  
  const [token, setToken] = useState(
    'BQAljJJD7hyo4dbB7iu7Vb3F0siWupZTW84LDzr6AluzNR-0m7m1Ne0QgjC9VZf01FJnxubw5xfmJcSHvR5Cp9V6XH-njsqMHEOAJsnObInZtQpdLv59piZYaoNL0b_sWDdj5uLgFxsO3d82WpbKHItEs2FUtV3pShaTW1XX0zeqXPu-4l-Rt_PhFUqlhKcIsKY5_7SY4oygz76nlNRK14vjZTpoawWsrpstXASRreJgTd-waFLWhA'
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
