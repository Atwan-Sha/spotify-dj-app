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
    'BQDD_m8deInNprlEqycQxAjWXSgFvVwwyaj4414HLH_UEyWE5hQn8OegxDF1SxQkP6uQSZ-AO2BQ79IzghhI0Q_rKFOhbweKk8FlippUdQqQmXkLaCgLqTi16aW6QuOX2hst_MfQ1TXT2SSRlccONoV0FnzSVvymsLaU6B1gNTkZZB64KCVdKOULfh2nYn3ANyw8xtB2Y2c4INQ__MJtb7GR8XIR8O6smxyOBRdhrX651anFyMpv'
  )

  return (
    <>
      <UserContext.Provider value={token}>
        <PlaylistContainer />
        <Player token={token} />
        <PlaylistContainer />
      </UserContext.Provider>
    </>
  )
}
