import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Playlist from './playlist/Playlist.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQCKQbWANSeQl3NixFyBGVWHVHbFpSxjl2_KiNoqNviYDA4SGBz8jZXlhWe1HAey0BPQ-5PiArtShqBmSYXbjhc9UEQkRnyJic9008kPPjD-tQkC_UelfdtIjcHe5sm9DYNGAA3ZKWjt071zWuuIW3YgzHvu6J-DffeMn14pGBNd2QZgssXaPfLKol9KAEZ5sF29mgVF22xotgurxxvgcAf8fIRNoZUUkvXDkOEZOasU6Q1L'
  )

  return (
    <>
      <Playlist token={token} />
      <Player token={token} />
    </>
  )
}
