import { useState } from 'react'
import { createContext } from 'react';
import './styles/App.css'
// import TestComp from './testing/TestComp.tsx'
// import PlaybackTest from './testing/PlaybackTest.tsx'
// import Playlist from './playlist/Playlist.tsx'
import PlaylistContainer from './playlist/PlaylistContainer.tsx'
import Player from './player/Player.tsx'

export const UserContext = createContext('')

export default function App() {

  const [token, setToken] = useState(
    'BQDTJpe_16Hjs_CJvkT-0igQ1C9VIReCvDowBg9iOkNDsg96a_j9RQuCnlud1bngntAtd386ZzHiVb1ZLOwuFw4LOR9JyecEpOZpYRoCN0J24jN33Pk9PICfjLXXkZ35L20CtJs7AXDz_Sd1NKdZPgzik2-TcS5nfTejBkID3xZrS3Fq-sYWlDCVTLJEfUIYfDmyyUrsYPh6jRZTJDBKHJFJIig1RMZ07xcIEBZcPYkpdBzAXe6d'
  )

  return (
    <>
      <UserContext.Provider value={token}>
        <PlaylistContainer />
        <Player token={token} />
        <PlaylistContainer />
      </UserContext.Provider>
    </>
  )
}
