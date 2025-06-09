import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  
  const [token, setToken] = useState(
    'BQDzIqLGy32RA1Nx4CLI3Tdcg6qtHApUzGexbXbmoU-QBen2MflvLreggbUkWTAvuQgoTPeaSmfWRJ5LjHOxEWbauJYlxJgh5s-nkRHknDdETa-32ccgH9tn2H8j0qEtqOZgKPR4o81DMorkxNfTqyWF5Ro31IeyuvNqzJMac1Jnd2tmU34fK_LGnGkUGj8mDGUj25ahJlnRYDDKnq84da6-3yg4oWEcxGeQT0_TUbdu_yPN'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
