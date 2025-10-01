import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQA3pF_yaB4xRwlwZSY7kj78iKYTiydGy7aDgKj9uqKhVuRR-hJ3vcMUxGwoogoEvADxqzqGKEfIr7TkU0Mrn8dfAIsegQ1WKQlYA9cqJu8Y5yBJi_PZmB5LGgLBBpYtCvofQoBTvPpBQlefkzTGNkFw_aDrKlU7M3SP5DBya0zcCkF5tbpAYexo8yQPPiqV1O_ZVuGIcccH3lQm8_Rwg0ja9_rgnNFCSIQbxlzVEbf4n6r7'
  )

  return (
    <>
      <PlaylistContainer token={token} />
      <Player token={token} />
    </>
  )
}
