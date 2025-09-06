import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export default function App() {

  const [token, setToken] = useState(
    'BQBC1QlgroEVERz2dOsndvH9ypbYMYHUzKx1bfu1IkGNl3YfmTZtmyA4i3jt4OciHnA70HRjv40zJvByn6DdTxR-xn8n0AuiQt7Fsn1rTKORP7_mamTzzQPjfCUbUceCN2dMDM5N64AysF_MhoKzLBZlJjN_Nv2Wek2xRH1jhwWPxsPvJOk_l-PMwU4jQJp_mmaZQjCtlU6EJ_foBFa0zaoTrPrI97ncOdsKhU5hulN4Kx5l'
  )

  return (
    <>
      <PlaylistContainer token={token} />
      <Player token={token} />
    </>
  )
}
