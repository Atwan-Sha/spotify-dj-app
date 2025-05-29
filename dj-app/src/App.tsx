import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQBAK2PllWQLMHqW0iGZRdehIc9oSD46KomQJ-mwmnDzhbCM836a9LAX-_KUJ6DMrfvyuYS2_Im6KcDFEa7FNcznpXQtnAm7a-0ZNOGI2X-n-bYd2aJBn0tJoVqT0sfteApdBBW1g8Z6DlnfaIbQHTD4gCqDhm4CW2Tw8Mr0t0uM-RW2lOuPpK2f5KPLXqOhjOEClNYpXaeX4HBr9MsPGoD9g7hcC_4AQWQwg0u5XVwjVRqP'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
