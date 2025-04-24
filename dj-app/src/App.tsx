import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQBFlBqWcRgpv7ajMr-SfHSDxgqZpynkJyNLJD3z3CRjW4dOzNi7zd1I2Erqm2KVZZTAXkrr9mR57DAJVbO0kGfj_LVD5uei1x985hpPfA2urBr7spyX-g8RyMki19UQVs9QYVwfYOigoYg4J6ypt4xNS5amQ1Dlhx2W9xW2lOBvbVSrr1HVMj_T4rph4KXJSdyzKhrXOPUdP6W76XmapgtY7ES8fzfhSiKYfr7m'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
