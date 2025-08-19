import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  
  const [token, setToken] = useState(
    'BQDhAL0nU1CSOTbyiRyUuxXEKw9ecftR7-3ZCgPKawdVeZOl5sat5e0CHNQoUnqyFCpJDgrK71Mcg8AdFlkTA3q3D7amikd8uXoA54_1hqMeHcyjFyThx3vxS7fXwdNCU3LIThGN9UKy6TghOSkvPYsr3Sn_2hWtg4Nq2jCWhDtEm_QheE_RptlkuEiGyeRMQM0bO73QHhrI1Zh5XglBwQQP3V1JWZxhX2xtCEp4qF-uXWIb'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
