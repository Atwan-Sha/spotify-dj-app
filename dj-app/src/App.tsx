import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  
  const [token, setToken] = useState(
    'BQCm8A2HW_LVfFS_DOcoZ_NagXHcRp-bAw9xSI2VaNCkKQotWsrCLEBDQdVju-DBwhA3uIhwR0TtJLQbhpl323DMrwqzQFnbgmGGrJOlNIfCEVDiINyM5o30y5XGtS8zDX7NW80snihuzyfY1SaYgOOirF-H2q9oKh6CjVC5qVQyX679qf_U3-lA-UYpJmy6BP7yHSkAg8moIRc393Qr8Mtu4EMPC3aTV_2higmTTi77z5u6'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
