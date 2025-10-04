import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQAh1__64xSk7L8UzGsnaDb9fTBLh0RjKggRYXxOojz93tGy75FAI1_25LxdfjVEWdjCX1PwKa7O9YO1k22iG-WJmkvNtA2DpqowjX3NjL0frrbwkaxZRTUEXOceyidaZVCOzQlxf44e8xVbA9XKJoV5sIclomHLp2J0ljvYKHAE0ab9DEl2JYHZA8iycNuJm-tQg6a27EZYzCfBHtam_PiznZpTPp4co_r-vh-c1JOX6BgWit2FFxA3XbSDkZn3MYiogWtAP2RC4YCLgJSDCTp6ocnyIfeopOhCUp9XVXVH5d5UjJReYgV2s9eLI-MinGM2njO0xk-ZNuA250LU_puUGXcnQ2W-BUCO9AjYAKjUKpcLWWFu33zm'
  )

  return (
    <>
      <PlaylistContainer token={token} />
      <Player token={token} />
    </>
  )
}
