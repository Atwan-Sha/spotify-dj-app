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
    'BQBsfOPPE8KargzqZq8nXqJjjEB2ZFn-2pPhhMleFFTAk2yTxZYqUukGY628NSe2IwvEQZ6tc9BGdrrMIGGzxTW9z0bxzflZH6T-98hN3qfbuKbU95lod4Zdiov2joHouNoQtt2v3udXDIJ92g6jOqy7ZqFwkEfgoOXS3q9A_FKpQRKAH6O1Ho2eFsl5UkioP0AbLPsYHZlUNy7g8llUwLS7eCyItjnQmclT8h-JAUcT3derXJUD'
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
