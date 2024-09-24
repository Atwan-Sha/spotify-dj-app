import { useState } from 'react'
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
import Player from './player/Player.tsx'

export default function App() {
  const [token, setToken] = useState(
    'BQC-_TYowWXwVSn_wSmTMW16KOvmAJgM59RVkuSO3rqz9q5WKP0YcSXdSJ8mJBNFpr2MnrLdJR1Qx1TaPJoRrORZKXxHChWyTgs2t2GqBlmXX6-yLzcDkD2zcHKjQfgEDrtSkGdkp6-pOnBs1Ih8Sc0hxsA55_MbNdSNOq_kFEaJuZ_rSM2Atv7PKaUDOPSSsE0My3tBh5k6csAX'
  )

  return (
    <>
      <Player token={token} />
    </>
  )
}
