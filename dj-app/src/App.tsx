import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQDjRuNXy3nL3XHCSSHf22wjiLEOOz840dAGX3suiqvzhi9NCCM_oO43hjbh8WtIMgRKBnhf9ireHlcIuJO1EJs2JrW8N8iAr5jQJuwKk_SirheNhWcVWqxxih4s1ZTH9E3Fq2usgzkGGx8miQxEwxrAZ1-y1SDu_RDiJkVyri1AWS4s0LZmpA1KIsANceZ17VYydiA8IFQLFw'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
