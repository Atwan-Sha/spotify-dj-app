import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQAAS3OftGYvJGBfTYU0-dXKEOmbyMTSlZ3REnk1hIc_dYkkGsY5e8-nYXmnFLw_mNZZlOLAA4zYC3eSkBnwHMYRkFAawlxT8sfZK9g2igRBPDswPxv_HZ9Bbfh4BlAqIYfbkhKzS8iYCfLvsbPbxNouBlvb1G9BAFozccEyTz695skH9od4U-va9p9QHE_Rsg2F05MxA7k-SXGVg-fxH6insGYzDMZZYugemte-1vY1oxmw'
  )

  return (
    <>
      <PlaylistContainer token={token} />
      <Player token={token} />
    </>
  )
}
