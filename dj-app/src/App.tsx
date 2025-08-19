import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  
  const [token, setToken] = useState(
    'BQC3P1nbYNYAwHG2l0N-fHnpi4ArbS0eL2d0cRWPTiswUFrL48yCZGX67A3RlOc510kwDUqlr5bwsUFRecXikPc8xAHCMrAoh4SoS5I4FY7Ith7EoZt0hLmCUK_YZwUyWte-H_vuy7i8AeF4GDlAR9wFh26X3Cynn7wJfNYUuQ5azdetKAhueKKctEFdxgboCHYZ-lCfZ49bIT4d3PQCqfbgveekGqHfL_oj6woR1HAoRSH9'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
