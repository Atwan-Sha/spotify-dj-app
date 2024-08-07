import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQDp0roseAuxxCr3jylBuvVDjG5LIH71dYZjcmMVxfGdMhXmpm_WQDLERo7DnBHsXbqh2PLOpYdKPaD1uNd0zAUXw8pZUUoDvU_RMBsIFEzoJVzMSdPrFMlCW25-UO-ILXf130Pek_VLm3DzgGg3R1-6JIfbOUKd8RmRe0_vxz_hL8D6QBEAxc9VMUFD9tLX0grO2jtZt6hkWQ'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
