import { useState } from 'react'
import './css/App.css'
import TestComp from './TestComp.tsx'
import PlaybackTest from './PlaybackTest.tsx'

export default function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(
    'BQCfHdppkhnBxYp0KmH7LsDgMrw4IwwWcXGwp96SW-oV6gIVgFpG7RysB8XugTRQh1tn_bqrOo0oSEij_4zwIJ-kJTZfRJ61kwI_rl3TGpZ6vXs5ft6RecANfMAQjxTDJ1B9YP5p4BN0KElB5EJWhpE7Prh9OsLUyLJNwMnCDaarWNlNz-Xr6A_L92ad2_sclksde1_O'
  )

  return (
    <>
      <h1>DJ App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* <TestComp prop1={str} prop2={count} /> */}
      <PlaybackTest token={token} />
    </>
  )
}
