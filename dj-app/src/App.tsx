import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQDXKLWmS-tgxHxUNUYnyb1_rmaYS6xsbZKYWwi18mYbQMXGQLRQFQkprTbdQ_tAXAJc0WXDM2vRGSRkGGoVh4bsPyrBCnSHY02kKf7zG-3qoXh5G9AwdBQusPJxHSZV5nxJu5Ea5PLKla2uf2xEwp84nYbtTDUs1RX7IB_5yTEz7Qx1ZhxqmPkRTkAV6SvKtFFe1TGZahFGz1AyfvdWoqMwOwbcsqeD1EPBSy4lWABCEFBZ'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
