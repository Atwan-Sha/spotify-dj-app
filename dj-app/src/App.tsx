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
    'BQCKON33mKERv2Ae8npPqGjmsBMX5igfbK15XRZGgnXJdLnjW9VmiNQ1MrQS068D0j3I69T6TqKKsLEEq7NUj7XT4YQzIwhH6p97EVoWtp-bTZw61T4G7gSrybdxKbrCIAVOGpxxcxDkaR9yn_aWs2eU6V3UdWwWv2q1vmx9UwYqFPj2LYgq13yvZBOQmwuk2DIoc8-sEm-bggSzU6nZJyxXyLmUHQNBtKk54-c0dU1HVPwKghKJ'
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
