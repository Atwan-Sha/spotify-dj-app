import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  
  const [token, setToken] = useState(
    'BQApaO0Rn7fq-fCzW8Sz5-xs4011D_TDQBkHJCOA2vjy_prFkX7eB9wL6A2Hm4UonDaRX3KvbRpY0VFga40tDDtFyb-Lr1YXkLREFz8gO1fHwC763hjrJd6pj1S8C010NPzBN9XC503p6HVpfiyD63UFZl5OcEnFp6lZzIwdx0UKcsYa7FT6wn8t6Kob5PH8fLNLajCMKF5spMcFbQ4y9zRP9v2ScQc1ZgQIHeJ7b0Oq6EUI'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
