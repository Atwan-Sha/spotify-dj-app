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
    'BQAKaYZQePIS-VwjYmo3bwNZHVTh6-CaADUtA-gVlEQBpXWOYwryDzayVKC4ocsbIy1yNo5Iu_NVQjS38y6lctQCQuf4PPUHeDXWoF43vM34cw16Fejy704KH63E0fg_oBo_FfusLOM'
  )

  return (
    <>
      <UserContext.Provider value={token}>
        <PlaylistContainer />
        {/* <Player token={token} /> */}
        <PlaylistContainer />
      </UserContext.Provider>
    </>
  )
}
