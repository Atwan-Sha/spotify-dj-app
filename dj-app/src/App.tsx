import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQBwASxZhL31rG4lwMJb2iXZ6cuwu52FMCAjtZ7_acmIjIJTrU6CYKCINLUBdk_gf-2Fbxc7_kOvOYgPNYfzuwOdlFHc1P03XY2l8APRm2SWWu_RwaF36iKFJq3lPrExh8CEpXTbo_xqtQY2ebmlu08IfgQBdK6BKkLNHvsMbfVKmzZPzAeu4QJQYZ9DVTzKIIZdDNUllPbb33Yng9e0U_yinlkkAvt9kRNVAeCKfbqdTth5'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
