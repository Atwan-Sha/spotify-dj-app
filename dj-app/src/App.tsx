import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQDYULiIU-xNGV-zir1OSA2AvRlOsT5Q492ZQxpOxIE7HLBZcutj2NUyeeh0NmoLKS80w7Fm3ykhl-wlXRBV06RaiToWw18O9H2QwqfzZEmpSxHcI7vGP6kWrFpHkRjeMLXWz_fi5ECVChgj0L3gbQhvXUqIiyYbwFQhaQlZ5vvrMH0WmqJ2k7Pc2HGOZx6db7u8EQ7T4-y_QA'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
