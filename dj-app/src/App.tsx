import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQCx-0BTmUhP2PoJ76mW_yd0b20Snj7BtQmdpcSx2GsvvI2r_EQqRv3jSvsOKqJMGixqowSqd8HLuB5PSuqAU1bzV_QvdvSjwuA__7jgHkkNmmSrwwcxJSxLD7fDzphIBVxvN-Lg8Imj9bWGq7fveaxEWaDyHXUnyNWwYEamXjA0qvapoN3H6_IuqmsCd9iPRTDC0rCjAa2UgPrAH8yvpUrL34vZD1XQTcy9uABJ'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
