import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQCyNUdyiqGvf6KGf6iBY2iQXNKlRWok8nLiPU9TG9GYU_UfxjO385GQOBkkpni4z1PHkYnvDKjb3qNRY-kO63T_lhVZeTdQaEmY2sGyCqAatQu_sr-XCT7q6x7nQ7-e-5CR-NbHxC0_rJgzcIILb6iMSAM-e43oWPgyxWB2Pywzje9npKPwL94uQUHbDRrhAtcWTSo4QaEgbapTkLj4zscMHYHoI_5odwsmdsGG'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
